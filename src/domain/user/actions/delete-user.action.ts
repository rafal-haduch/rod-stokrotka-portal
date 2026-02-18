'use server';

import { DeleteUserResult } from '@/contracts/user-actions-result';

import { DomainError } from '@/domain/error/domain-error';
import { ErrorCode } from '@/domain/error/error-codes';
import { ERROR_MESSAGES } from '@/domain/error/error.messages';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { requireSession } from '@/domain/auth/require-session';
import { userRepository } from '@/domain/user/user.repository';
import { parseDeleteUserInput } from '@/domain/user/user-input.parse';

export async function deleteUser(formData: FormData): Promise<DeleteUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { id } = parseDeleteUserInput(formData);

        // Database operation
        await userRepository.delete(id);

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
