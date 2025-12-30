'use server';

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

function generateLogin(name: string) {
    return name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
}

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}

export async function createUser(formData: FormData) {
    const name = formData.get('name') as string;

    const login = 'admin';
    const password = 'admin';

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            login,
            password: hashed,
            name,
        },
    });

    return {
        name,
        login,
        password, // NOTE: TYLKO do pokazania po utworzeniu
    };
}
