'use server';

import { UpdateUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/domain/error/domain-error';
import { ErrorCode } from '@/domain/error/error-codes';
import { ERROR_MESSAGES } from '@/domain/error/error.messages';
import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { userRepository } from '@/domain/user/user.repository';
import { parseUpdateUserInput } from '@/domain/user/user-input.parse';

export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { id, name, role, plotIds } = parseUpdateUserInput(formData);

        // Database operation
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
