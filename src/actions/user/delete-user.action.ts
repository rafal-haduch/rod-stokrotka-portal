'use server';

import { DeleteUserResult } from '@/types/user-actions-result';

import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';

import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { requireSession } from '@/domain/auth/require-session';
import { userRepository } from '@/lib/repositories/user.repository';
import { validateId } from '@/domain/validation';

export async function deleteUser(formData: FormData): Promise<DeleteUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Get input data
        const idRaw = formData.get('id');

        // Validate and prepare data for database
        const id = validateId(idRaw);

        await userRepository.delete({ id });

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
