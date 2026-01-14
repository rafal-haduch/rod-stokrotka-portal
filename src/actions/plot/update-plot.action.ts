'use server';

import { prisma } from '@/lib/prisma';

import { UpdatePlotResult } from '@/types/plot-actions-result';

import { canPerform } from '@/domain/permissions/can-perform';
import { PERMISSION_KEYS } from '@/domain/permissions/permissions';
import { requireSession } from '@/domain/auth/require-session';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { plotRepository } from '@/lib/repositories/plot.repository';
import { ERROR_MESSAGES } from '@/errors/error-messages';

export async function updatePlot(formData: FormData): Promise<UpdatePlotResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!canPerform(session.role, PERMISSION_KEYS.UPDATE_PLOT)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Validate input
        const idRaw = formData.get('id');
        const plotNumberRaw = formData.get('plotNumber');
        const areaRaw = formData.get('area');

        if (
            typeof idRaw !== 'string' ||
            typeof plotNumberRaw !== 'string' ||
            typeof areaRaw !== 'string'
        ) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (idRaw.trim() === '' || plotNumberRaw.trim() === '') {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        // Prepare data into database and validate
        const id = Number(idRaw.trim());
        const plotNumber = plotNumberRaw.trim();
        let area: number | null = null;

        if (!Number.isFinite(id) || !Number.isInteger(id) || id <= 0) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (areaRaw.trim() !== '') {
            area = Number(areaRaw.trim());

            if (!Number.isFinite(area) || area < 0) {
                throw new DomainError(ErrorCode.INVALID_INPUT);
            }
        }

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
