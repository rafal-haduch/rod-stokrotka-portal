'use server';

import { prisma } from '@/lib/prisma';

import { DeleteUserResult } from '@/types/user-actions-result';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { ERROR_MESSAGES } from '@/errors/error-messages';

import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { requireSession } from '@/domain/auth/require-session';

export async function deleteUser(formData: FormData): Promise<DeleteUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input data
        const idRaw = formData.get('id');

        if (typeof idRaw !== 'string') {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!idRaw) {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        // Prepare data into database and validate
        const id = Number(idRaw);
        if (!Number.isInteger(id) || id <= 0) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            await tx.user.delete({
                where: { id },
            });
        });

        return {
            success: true,
        };
    } catch (e) {
        if (e instanceof DomainError) {
            return {
                success: false,
                errorCode: e.code,
                errorMsg: ERROR_MESSAGES[e.code],
            };
        } else {
            return {
                success: false,
                errorCode: ErrorCode.SERVER_ERROR,
                errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
            };
        }
    }
}
