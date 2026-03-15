'use server';

import { ActionResult } from '@/shared/contracts/action-result';
import { canPerform } from '@/shared/auth/can-perform';
import { PERMISSION_KEYS } from '@/shared/auth/permissions';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { parseUpdatePlotInput } from '@/features/plot/domain/plot-input-parse';
import { plotRepository } from '@/features/plot/domain/plot-repository';

export async function updatePlot(formData: FormData): Promise<ActionResult<void>> {
    try {
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.UPDATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { id, plotNumber, area } = parseUpdatePlotInput(formData);

        await plotRepository.update({ id, plotNumber, area });

        return {
            success: true,
        };
    } catch (e) {
        return handleActionError(e);
    }
}
