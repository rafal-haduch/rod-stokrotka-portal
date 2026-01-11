'use server';

import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

import { ChangePasswordResult } from '@/types/user-actions-result';

import { getUserSession } from '@/lib/auth/get-user-session';

import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { ERROR_MESSAGES } from '@/errors/error-messages';

export async function changePassword(formData: FormData): Promise<ChangePasswordResult> {
    try {
        // Session
        const { id } = await getUserSession();
        if (!id) {
            throw new DomainError(ErrorCode.NO_SESSION);
        }

        // Validate input
        const currentPassword = formData.get('currentPassword');
        const newPassword = formData.get('newPassword');
        const newPasswordRepeat = formData.get('newPasswordRepeat');

        if (
            typeof currentPassword !== 'string' ||
            typeof newPassword !== 'string' ||
            typeof newPasswordRepeat !== 'string'
        ) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }

        if (!currentPassword || !newPassword || !newPasswordRepeat) {
            throw new DomainError(ErrorCode.EMPTY_INPUT);
        }

        if (newPassword !== newPasswordRepeat) {
            throw new DomainError(ErrorCode.NEW_PASSWORDS_MISMATCH);
        }

        if (newPassword === currentPassword) {
            throw new DomainError(ErrorCode.SAME_NEW_PASSWORD);
        }

        // TODO: Check password strength user.role-based

        // Check current pasword
        const user = await prisma.user.findUnique({
            where: { id: id },
            select: { password: true },
        });

        if (!user?.password) {
            throw new DomainError(ErrorCode.USER_NOT_FOUND);
        }

        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordMatch) {
            throw new DomainError(ErrorCode.WRONG_PASSWORD);
        }

        // Update password
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: id },
            data: {
                password: newPasswordHash,
            },
        });

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
