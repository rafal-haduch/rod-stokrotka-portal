'use server';

import { Role } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { UpdateUserResult } from '@/types/editUserResult';

//TODO: Preparing data about plot for the database type
export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        const idRaw = formData.get('id');
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        //const plotRaw = formData.get('plot');

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
        //const plot = plotRaw.toString();

        if (!Object.values(Role).includes(role)) {
            throw new Error('Niepoprawna rola użytkownika');
        }

        await prisma.user.update({
            where: { id },
            data: { name, role },
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
