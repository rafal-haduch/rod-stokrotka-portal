'use server';

import { prisma } from '@/lib/prisma';

import { DeletePlotResult } from '@/types/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';

export async function deletePlot(formData: FormData): Promise<DeletePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.DELETE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const id = Number(formData.get('id'));

        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { plotId: id },
            });

            await prisma.plot.delete({
                where: { id },
            });
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas usuwania działki!',
        };
    }
}
