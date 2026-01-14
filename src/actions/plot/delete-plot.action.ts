'use server';

import { prisma } from '@/lib/prisma';

import { DeletePlotResult } from '@/types/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { ERROR_MESSAGES } from '@/errors/error-messages';
import { plotRepository } from '@/lib/repositories/plot.repository';

export async function deletePlot(formData: FormData): Promise<DeletePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.DELETE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input
        const idRaw = formData.get('id');

        if (typeof idRaw !== 'string') {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (idRaw.trim() === '') {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        // Prepare data for database and validate
        const id = Number(idRaw.trim());

        if (!Number.isFinite(id) || !Number.isInteger(id) || id <= 0) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        await plotRepository.delete({ id });

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
