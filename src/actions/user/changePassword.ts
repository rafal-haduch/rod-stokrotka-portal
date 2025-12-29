'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function changePassword(formData: FormData) {
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            login,
            name,
            password: hashed,
        },
    });
}
