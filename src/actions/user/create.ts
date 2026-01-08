'use server';

import { prisma } from '@/lib/prisma';
import { CreateUserResult } from '@/types/user-actions-result';

import { Role } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
    try {
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        if (typeof nameRaw !== 'string' || nameRaw.length === 0) {
            throw new Error('Invalid name');
        }

        if (!roleRaw || !Object.values(Role).includes(roleRaw as Role)) {
            throw new Error('Invalid role');
        }

        // TODO: zmienic na funkcje do ktorej przekazuje argument
        //HACK
        if (nameRaw.toLocaleLowerCase() === 'error test') {
            throw new Error('Test');
        }

        const name = nameRaw;
        const role = roleRaw as Role;
        const plots = plotIdsRaw.map((id) => Number(id)).filter((id) => !Number.isNaN(id));

        const login = generateLogin(name);
        const password = generatePassword();
        const hashed = await bcrypt.hash(password, 10);

        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    login,
                    password: hashed,
                    name,
                    role,
                },
            });

            if (plots.length > 0) {
                await tx.userPlot.createMany({
                    data: plots.map((plotId) => ({
                        userId: user.id,
                        plotId,
                    })),
                });
            }
        });

        return {
            success: true,
            data: {
                name,
                role,
                login,
                password, // NOTE: TYLKO do pokazania po utworzeniu
            },
        };
    } catch (e) {
        return {
            success: false,
            error: 'Wystąpił błąd podczas tworzenia nowego konta!',
        };
    }
}

function generateLogin(name: string) {
    return name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
}

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}
