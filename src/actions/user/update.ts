'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

import { UpdateUserResult } from '@/types/user-actions-result';

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

            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            await tx.userPlot.createMany({
                data: plots.map((plotId) => ({
                    userId: id,
                    plotId,
                })),
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
