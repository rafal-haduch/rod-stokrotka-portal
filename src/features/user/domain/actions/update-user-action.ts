'use server';

import { revalidateTag } from 'next/cache';

import { ActionResult } from '@/shared/contracts/action-result';
import { requireSession } from '@/shared/auth/require-session';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { UpdateUserData } from '@/features/user/domain/user-api-contracts';
import { parseUpdateUserInput } from '@/features/user/domain/user-input-parse';
import { userRepository } from '@/features/user/domain/user-repository';
import { mapToUpdatedUserData } from '@/features/user/domain/user-mapper';

export async function updateUser(formData: FormData): Promise<ActionResult<UpdateUserData>> {
    try {
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { id, name, role, plotIds } = parseUpdateUserInput(formData);

        const result = await userRepository.update({ id, name, plotIds, role });

        revalidateTag('users');

        return {
            success: true,
            data: mapToUpdatedUserData(result),
        };
    } catch (e) {
        return handleActionError(e);
    }
}
