'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

import { UpdateUserResult } from '@/types/user-actions-result';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { ERROR_MESSAGES } from '@/errors/error-messages';

import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input data
        const idRaw = formData.get('id');
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        if (
            typeof idRaw !== 'string' ||
            typeof nameRaw !== 'string' ||
            typeof roleRaw !== 'string'
        ) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!roleRaw || !Object.values(Role).includes(roleRaw as Role)) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!plotIdsRaw.every((v) => typeof v === 'string')) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!idRaw || !nameRaw || !roleRaw) {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        // Prepare data into database
        const id = Number(idRaw);
        const name = nameRaw;
        const role = roleRaw as Role;
        const plotId = plotIdsRaw.map(Number);
        if (plotId.some((id) => !Number.isInteger(id) || id <= 0)) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        console.log(plotId);

        await prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id },
                data: { name, role },
            });

            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            if (plotId.length > 0) {
                await tx.userPlot.createMany({
                    data: plotId.map((plotId) => ({
                        userId: id,
                        plotId,
                    })),
                });
            }
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
            console.log(e);
            return {
                success: false,
                errorCode: ErrorCode.SERVER_ERROR,
                errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
            };
        }
    }
}
