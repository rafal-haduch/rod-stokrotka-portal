'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';
import bcrypt from 'bcrypt';

function generateLogin(name: string) {
    return name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
}

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}

export async function createUser(formData: FormData) {
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');

    if (typeof nameRaw !== 'string' || nameRaw.trim().length === 0) {
        throw new Error('Invalid name');
    }

    if (!roleRaw || !Object.values(Role).includes(roleRaw as Role)) {
        throw new Error('Invalid role');
    }

    const name = nameRaw;
    const role = roleRaw as Role;

    const login = generateLogin(name);
    const password = generatePassword();
    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            login,
            password: hashed,
            name,
            role,
        },
    });

    return {
        name,
        role,
        login,
        password, // NOTE: TYLKO do pokazania po utworzeniu
    };
}
