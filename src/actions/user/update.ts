'use server';

import { Role } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { UpdateUserResult } from '@/types/updateUserResult';

//TODO: Preparing data about plot for the database type
export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        const idRaw = formData.get('id');
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        if (typeof nameRaw !== 'string' || nameRaw.length === 0) {
            throw new Error('Invalid name');
        }

        if (!roleRaw || !Object.values(Role).includes(roleRaw as Role)) {
            throw new Error('Invalid role');
        }

        //HACK
        if (nameRaw.toLocaleLowerCase() === 'error test') {
            throw new Error('Test');
        }

        const id = Number(idRaw);
        const name = nameRaw.toString();
        const role = roleRaw.toString() as Role;
        const plots = plotIdsRaw.map((id) => Number(id)).filter((id) => !Number.isNaN(id));

        if (!Object.values(Role).includes(role)) {
            throw new Error('Niepoprawna rola użytkownika');
        }

        await prisma.user.update({
            where: { id },
            data: { name, role },
        });

        console.log(plots);

        await prisma.$transaction(async (tx) => {
            await prisma.user.update({
                where: { id },
                data: { name, role },
            });

            await tx.plot.updateMany({
                where: {
                    ownerId: id,
                },
                data: {
                    ownerId: null,
                },
            });

            await tx.plot.updateMany({
                where: {
                    id: { in: plots },
                },
                data: {
                    ownerId: id,
                },
            });
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas zmiany danych konta!',
        };
    }
}
