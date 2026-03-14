'use server';

import bcrypt from 'bcrypt';

import { ActionResult } from '@/shared/contracts/action-result';
import { requireSession } from '@/shared/auth/require-session';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { handleActionError } from '@/shared/error/handle-action-error';

import { userRepository } from '@/features/user/domain/user-repository';

import { enforcePasswordPolicy } from '@/features/auth/domain/auth.helpers';
import { parseChangePasswordInput } from '@/features/auth/domain/auth.input-parse';

export async function changePassword(formData: FormData): Promise<ActionResult<void>> {
    try {
        const { id, role } = await requireSession();

        if (!id || !role) {
            throw new DomainError(ErrorCode.NO_SESSION);
        }

        const { currentPassword, newPassword } = parseChangePasswordInput(formData);

        enforcePasswordPolicy(newPassword, role);

        const result = await userRepository.getUserPassword(id);
        if (!result?.password) {
            throw new DomainError(ErrorCode.USER_NOT_FOUND);
        }

        const isPasswordMatch = await bcrypt.compare(currentPassword, result.password);
        if (!isPasswordMatch) {
            throw new DomainError(ErrorCode.WRONG_PASSWORD);
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        await userRepository.updatePasswordHash(id, newPasswordHash);

        return {
            success: true,
        };
    } catch (e) {
        return handleActionError(e);
    }
}
