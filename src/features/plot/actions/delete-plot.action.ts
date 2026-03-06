'use server';

import { DeletePlotResult } from '@/shared/contracts/plot-actions';

import { canPerform } from '@/shared/auth/can-perform';
import { PERMISSION_KEYS } from '@/shared/auth/permissions';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ERROR_MESSAGES } from '@/shared/error/error.messages';
import { plotRepository } from '@/features/plot/plot.repository';
import { parseDeletePlotInput } from '../plot-input.parse';

export async function deletePlot(formData: FormData): Promise<DeletePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.DELETE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { id } = parseDeletePlotInput(formData);

        // Database operation
        await plotRepository.delete(id);

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
