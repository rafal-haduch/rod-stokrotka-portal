'use server';

import { prisma } from '@/lib/prisma';

import { CreatePlotResult } from '@/types/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';

export async function createPlot(formData: FormData): Promise<CreatePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.CREATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const plotNumberRaw = formData.get('plotNumber');
        const areaRaw = formData.get('area');

        if (typeof plotNumberRaw !== 'string' || plotNumberRaw.length === 0) {
            throw new Error('Invalid plot number');
        }

        const plotNumber = plotNumberRaw as string;

        const area = Number(areaRaw);
        // if (Number.isNaN(area)) {
        //     throw new Error('Area must be a number');
        // }

        //HACK
        if (plotNumberRaw.toLocaleLowerCase() === 'error') {
            throw new Error('Test error result');
        }

        await prisma.plot.create({
            data: {
                plotNumber,
                area,
            },
        });

        console.log('Error');

        return {
            success: true,
            data: {
                plotNumber,
                area,
            },
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas dodawania nowej działki!',
        };
    }
}
