'use server';

import bcrypt from 'bcrypt';

import { CreateUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/domain/error/domain-error';
import { ErrorCode } from '@/domain/error/error-codes';
import { ERROR_MESSAGES } from '@/domain/error/error.messages';
import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { userRepository } from '@/domain/user/user.repository';
import { parseCreateUserInput } from '@/domain/user/user-input.parse';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { name, role, plotIds } = parseCreateUserInput(formData);

        // Prepare other necessary data
        const login = generateLogin(name);
        const password = generatePassword();

        const passwordHash = await bcrypt.hash(password, 10);

        // Database operation
        await userRepository.create({ name, plotIds, role, login, passwordHash });

        // NOTE: The login and password are returned because they are needed to be passed on to the user for whom the account was created.
        return {
            success: true,
            data: {
                name,
                role,
                login,
                password,
            },
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

function generateLogin(name: string) {
    return name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000);
}

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}
