'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function registerUser(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            email,
            name,
            password: hashed,
        },
    });
}
