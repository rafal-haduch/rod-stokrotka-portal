'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';

export async function updateUser(formData: FormData) {
    const idRaw = formData.get('id');
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');
    //const plotRaw = formData.get('plot');

    if (!idRaw || !nameRaw || !roleRaw) {
        throw new Error('Brak wymaganych danych');
    }

    const id = Number(idRaw);
    const name = nameRaw.toString();
    const role = roleRaw.toString() as Role;
    //TODO: Preparing data for the database type
    //const plot = plotRaw.toString();

    if (!Object.values(Role).includes(role)) {
        throw new Error('Niepoprawna rola użytkownika');
    }

    await prisma.user.update({
        where: { id },
        data: { name, role },
    });

    redirect('/dashboard/users');
}
