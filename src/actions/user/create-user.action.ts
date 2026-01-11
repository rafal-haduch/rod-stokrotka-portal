'use server';

import { Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

import { CreateUserResult } from '@/types/user-actions-result';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { ERROR_MESSAGES } from '@/errors/error-messages';

import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        if (typeof nameRaw !== 'string' || typeof roleRaw !== 'string') {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!roleRaw || !Object.values(Role).includes(roleRaw as Role)) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!plotIdsRaw.every((v) => typeof v === 'string')) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!nameRaw || !roleRaw) {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        // Prepare data for the database and validate
        const name = nameRaw;
        const role = roleRaw as Role;
        const plotId = plotIdsRaw.map(Number);
        if (plotId.some((id) => !Number.isInteger(id) || id <= 0)) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

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

            if (plotId.length > 0) {
                await tx.userPlot.createMany({
                    data: plotId.map((plotId) => ({
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
                password, // NOTE: Required to show credentails after account creation.
            },
        };
    } catch (e) {
        if (e instanceof DomainError) {
            return {
                success: false,
                errorCode: e.code,
                errorMsg: ERROR_MESSAGES[e.code],
            };
        }
        return {
            success: false,
            errorCode: ErrorCode.SERVER_ERROR,
            errorMsg: 'Wystąpił błąd podczas tworzenia nowego konta!',
        };
    }
}

function generateLogin(name: string) {
    return name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
}

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}
