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
import { parseDeletePlotInput } from '@/features/plot/domain/plot-input-parse';
import { DeletePlotData } from '@/features/plot/domain/plot-api-contracts';

export async function deletePlot(formData: FormData): Promise<ActionResult<DeletePlotData>> {
    try {
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.DELETE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { id } = parseDeletePlotInput(formData);

        await plotRepository.delete(id);

        revalidateTag('plots');

        return {
            success: true,
            data: {
                id: id,
            },
        };
    } catch (e) {
        return handleActionError(e);
    }
}
