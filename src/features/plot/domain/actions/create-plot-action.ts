'use server';

import { revalidateTag } from 'next/cache';

import { ActionResult } from '@/shared/contracts/action-result';
import { canPerform } from '@/shared/auth/can-perform';
import { PERMISSION_KEYS } from '@/shared/auth/permissions';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { plotRepository } from '@/features/plot/domain/plot-repository';
import { CreatePlotData } from '@/features/plot/domain/plot-api-contracts';
import { parseCreatePlotInput } from '@/features/plot/domain/plot-input-parse';
import { mapToCreatedPlotData } from '@/features/plot/domain/plot-mapper';

export async function createPlot(formData: FormData): Promise<ActionResult<CreatePlotData>> {
    try {
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.CREATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { plotNumber, area } = parseCreatePlotInput(formData);

        const result = await plotRepository.create({ plotNumber, area });

        revalidateTag('plots');

        return {
            success: true,
            data: mapToCreatedPlotData(result),
        };
    } catch (e) {
        return handleActionError(e);
    }
}
