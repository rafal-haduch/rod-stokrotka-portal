'use server';

import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

import { ChangePasswordResult } from '@/contracts/user-actions';

import { requireSession } from '@/features/auth/require-session';
import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { ERROR_MESSAGES } from '@/features/error/error.messages';
import { enforcePasswordPolicy } from '@/features/security/password-policy';
import { userRepository } from '@/features/user/user.repository';
import { parseChangePasswordInput } from '@/features/user/user.input-parse';

export async function changePassword(formData: FormData): Promise<ChangePasswordResult> {
    try {
        // Session and permission
        const { id, role } = await requireSession();

        if (!id || !role) {
            throw new DomainError(ErrorCode.NO_SESSION);
        }

        // Prepare input data (validate and parse)
        const { currentPassword, newPassword } = parseChangePasswordInput(formData);

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

        // Prepare other necessary data
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        // Database operation
        await userRepository.changePassword(id, newPasswordHash);

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
