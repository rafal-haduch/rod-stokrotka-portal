'use server';

import { UpdatePlotResult } from '@/types/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';
import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';
import { plotRepository } from '@/domain/plot/plot.repository';
import { parseUpdatePlotInput } from '../plot-input.parse';

export async function updatePlot(formData: FormData): Promise<UpdatePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.UPDATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { id, plotNumber, area } = parseUpdatePlotInput(formData);

        // Database operation
        await plotRepository.update({ id, plotNumber, area });

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
