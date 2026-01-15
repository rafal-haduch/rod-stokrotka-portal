'use server';

import { DeletePlotResult } from '@/types/plot-actions-result';

import { plotRepository } from '@/lib/repositories/plot.repository';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';
import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';
import { validateId } from '@/domain/validation';

export async function deletePlot(formData: FormData): Promise<DeletePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.DELETE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input
        const idRaw = formData.get('id');

        // Validate and prepare data for database
        const id = validateId(idRaw);

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
