'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';

export async function updateUser(formData: FormData) {
    const idRaw = formData.get('id');
    const roleRaw = formData.get('role');

    if (!idRaw || !roleRaw) {
        throw new Error('Brak wymaganych danych');
    }

    const id = Number(idRaw);
    const role = roleRaw.toString() as Role;

    if (!Object.values(Role).includes(role)) {
        throw new Error('Niepoprawna rola użytkownika');
    }

    await prisma.user.update({
        where: { id },
        data: { role },
    });

    redirect('/dashboard/users');
}
