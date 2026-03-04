'use server';

import { revalidateTag } from 'next/cache';
import bcrypt from 'bcrypt';

import { CreateUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { handleActionError } from '@/features/error/handle-action-error';

import { requireSession } from '@/features/auth/require-session';

import { parseCreateUserInput } from '@/features/user/domain/user.input-parse';
import { userRepository } from '@/features/user/domain/user.repository';
import {
    generateLogin,
    generatePassword,
    isAdminOrBoard,
} from '@/features/user/domain/user.helpers';

export async function createUser(formData: FormData): Promise<CreateUserResult> {
    try {
        // 1. Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // 2. Prepare input data (validate and parse)
        const { name, role, plotIds } = parseCreateUserInput(formData);

        // 3. Prepare other necessary data or buisnes logic
        const login = generateLogin(name);
        const password = generatePassword();

        const passwordHash = await bcrypt.hash(password, 10);

        // 4. Database operation
        const result = await userRepository.create({ name, plotIds, role, login, passwordHash });

        // 5. Revalidate cache
        revalidateTag('users');

        //REVIEW: Optimize return by mapper or sth?
        // 6. Return
        // NOTE: The login and password are returned because they are needed to be passed on to the user for whom the account was created.
        return {
            success: true,
            data: {
                id: result.id,
                name,
                plots: result.plots.map((p) => {
                    return {
                        id: p.plot.id,
                        plotNumber: p.plot.plotNumber,
                    };
                }),
                role,
                login,
                password,
                createdAt: result.createdAt,
                lastLogin: result.lastLogin,
            },
        };
    } catch (e) {
        return handleActionError(e);
    }
}
