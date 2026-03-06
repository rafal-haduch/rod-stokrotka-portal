'use server';

import { CreatePlotResult } from '@/shared/contracts/plot-actions';

import { canPerform } from '@/shared/auth/can-perform';
import { PERMISSION_KEYS } from '@/shared/auth/permissions';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ERROR_MESSAGES } from '@/shared/error/error.messages';
import { plotRepository } from '@/features/plot/plot.repository';
import { parseCreatePlotInput } from '../plot-input.parse';
import { revalidateTag } from 'next/cache';

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

        // Revalidate cache
        revalidateTag('plots');

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
