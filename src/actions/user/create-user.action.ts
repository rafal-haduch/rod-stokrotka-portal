'use server';

import bcrypt from 'bcrypt';

import { CreateUserResult } from '@/types/user-actions-result';

import { userRepository } from '@/lib/repositories/user.repository';

import { DomainError } from '@/domain/errors/domain-error';
import { ErrorCode } from '@/domain/errors/error-codes';
import { ERROR_MESSAGES } from '@/domain/errors/error-messages';
import { requireSession } from '@/domain/auth/require-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';
import { validatePlotIds, validateUserName, validateUserRole } from '@/domain/validation';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Get input data
        const nameRaw = formData.get('name');
        const roleRaw = formData.get('role');
        const plotIdsRaw = formData.getAll('plotIds');

        // Validate input data and prepare for database
        const name = validateUserName(nameRaw);
        const role = validateUserRole(roleRaw);
        const plotId = validatePlotIds(plotIdsRaw);

        const login = generateLogin(name);
        const password = generatePassword();

        const passwordHash = await bcrypt.hash(password, 10);

        await userRepository.create({ name, plotId, role, login, passwordHash });

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
