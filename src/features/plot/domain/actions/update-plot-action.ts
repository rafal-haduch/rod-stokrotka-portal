'use server';

import { revalidateTag } from 'next/cache';

import { ActionResult } from '@/shared/contracts/action-result';
import { canPerform } from '@/shared/auth/can-perform';
import { PERMISSION_KEYS } from '@/shared/auth/permissions';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { parseUpdatePlotInput } from '@/features/plot/domain/plot-input-parse';
import { plotRepository } from '@/features/plot/domain/plot-repository';
import { UpdatedPlotData } from '@/features/plot/domain/plot-api-contracts';
import { mapToUpdatedPlotData } from '@/features/plot/domain/plot-mapper';

export async function updatePlot(formData: FormData): Promise<ActionResult<UpdatedPlotData>> {
    try {
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.UPDATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { id, plotNumber, area } = parseUpdatePlotInput(formData);

        const result = await plotRepository.update({ id, plotNumber, area });

        revalidateTag('plots');

        return {
            success: true,
            data: mapToUpdatedPlotData(result),
        };
    } catch (e) {
        return handleActionError(e);
    }
}
