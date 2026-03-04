'use server';

import { revalidateTag } from 'next/cache';

import { DeleteUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { handleActionError } from '@/features/error/handle-action-error';

import { requireSession } from '@/features/auth/require-session';

import { isAdminOrBoard } from '@/features/user/domain/user.helpers';
import { parseDeleteUserInput } from '@/features/user/domain/user.input-parse';
import { userRepository } from '@/features/user/domain/user.repository';

export async function deleteUser(formData: FormData): Promise<DeleteUserResult> {
    try {
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { id } = parseDeleteUserInput(formData);

        await userRepository.delete(id);

        revalidateTag('users');

        return {
            success: true,
        };
    } catch (e) {
        return handleActionError(e);
    }
}
