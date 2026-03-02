'use server';

import { revalidateTag } from 'next/cache';

import { DeleteUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { ERROR_MESSAGES } from '@/features/error/error.messages';
import { requireSession } from '@/features/auth/require-session';

import { userRepository } from '../user.repository';
import { parseDeleteUserInput } from '../user.input-parse';
import { isAdminOrBoard } from '../user.helpers';

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

        // Revalidate cache
        revalidateTag('users');

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
