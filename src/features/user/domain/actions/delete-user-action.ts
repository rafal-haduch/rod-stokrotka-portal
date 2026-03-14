'use server';

import { revalidateTag } from 'next/cache';

import { ActionResult } from '@/shared/contracts/action-result';
import { requireSession } from '@/shared/auth/require-session';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { parseDeleteUserInput } from '@/features/user/domain/user-input-parse';
import { userRepository } from '@/features/user/domain/user-repository';

export async function deleteUser(formData: FormData): Promise<ActionResult<void>> {
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
