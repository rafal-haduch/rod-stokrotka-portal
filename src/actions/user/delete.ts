'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function deleteUser(formData: FormData) {
    const id = Number(formData.get('id'));

    await prisma.user.delete({
        where: { id },
    });

    redirect('/dashboard/users');
}
