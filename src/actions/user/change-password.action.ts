'use server';

import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

import { ChangePasswordResult } from '@/types/user-actions-result';

import { userRepository } from '@/lib/repositories/user.repository';

import { requireSession } from '@/domain/auth/require-session';
import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';
import { enforcePasswordPolicy } from '@/domain/security/password-policy';
import { validateUserPassword } from '@/domain/user/user.validation';

export async function changePassword(formData: FormData): Promise<ChangePasswordResult> {
    try {
        // Session
        const { id, role } = await requireSession();
        if (!id || !role) {
            throw new DomainError(ErrorCode.NO_SESSION);
        }

        // Get input data
        const currentPasswordRaw = formData.get('currentPassword');
        const newPasswordRaw = formData.get('newPassword');
        const newPasswordRepeatRaw = formData.get('newPasswordRepeat');

        // Basic validation
        if (newPasswordRaw !== newPasswordRepeatRaw) {
            throw new DomainError(ErrorCode.NEW_PASSWORDS_MISMATCH);
        }

        if (newPasswordRaw === currentPasswordRaw) {
            throw new DomainError(ErrorCode.SAME_NEW_PASSWORD);
        }

        // Validate input data
        const currentPassword = validateUserPassword(currentPasswordRaw);
        const newPassword = validateUserPassword(newPasswordRaw);

        // Password policy
        enforcePasswordPolicy(newPassword, role);

        // Check current pasword
        const user = await prisma.user.findUnique({
            where: { id },
            select: { password: true },
        });
        if (!user?.password) {
            throw new DomainError(ErrorCode.USER_NOT_FOUND);
        }

        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordMatch) {
            throw new DomainError(ErrorCode.WRONG_PASSWORD);
        }

        // Save new hash password into database
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        await userRepository.changePassword({ id, newPasswordHash });

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
