'use server';

import { UpdateUserResult } from '@/types/user-actions-result';

import { userRepository } from '@/lib/repositories/user.repository';

import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';
import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { validateUserName, validateUserRole } from '@/domain/user/user.validation';
import { validateId } from '@/domain/shared';
import { validatePlotIds } from '@/domain/plot/plot.validation';

export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Get input data
        const idRaw = formData.get('id');
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        // Validate input data and prepare for database
        const id = validateId(idRaw);
        const name = validateUserName(nameRaw);
        const role = validateUserRole(roleRaw);
        const plotIds = validatePlotIds(plotIdsRaw);

        await userRepository.update({ id, name, plotIds, role });

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
            console.log(e);
            return {
                success: false,
                errorCode: ErrorCode.SERVER_ERROR,
                errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
            };
        }
    }
}
