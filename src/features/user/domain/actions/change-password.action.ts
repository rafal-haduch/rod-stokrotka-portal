'use server';

import bcrypt from 'bcrypt';

import { ChangePasswordResult } from '@/contracts/user-actions';

import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { handleActionError } from '@/features/error/handle-action-error';

import { requireSession } from '@/features/auth/require-session';

import { enforcePasswordPolicy } from '@/features/security/password-policy';

import { parseChangePasswordInput } from '@/features/user/domain/user.input-parse';
import { userRepository } from '@/features/user/domain/user.repository';

export async function changePassword(formData: FormData): Promise<ChangePasswordResult> {
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

        await userRepository.changePassword(id, newPasswordHash);

        return {
            success: true,
        };
    } catch (e) {
        return handleActionError(e);
    }
}
