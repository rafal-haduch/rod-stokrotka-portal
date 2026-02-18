'use server';

import { CreatePlotResult } from '@/contracts/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';
import { DomainError } from '@/domain/error/domain-error';
import { ErrorCode } from '@/domain/error/error-codes';
import { ERROR_MESSAGES } from '@/domain/error/error.messages';
import { plotRepository } from '@/domain/plot/plot.repository';
import { parseCreatePlotInput } from '../plot-input.parse';

export async function createPlot(formData: FormData): Promise<CreatePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.CREATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { plotNumber, area } = parseCreatePlotInput(formData);

        // Database operation
        const newPlot = await plotRepository.create({ plotNumber, area });

        return {
            success: true,
            data: {
                plotNumber: newPlot.plotNumber,
                area: newPlot.area,
            },
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
