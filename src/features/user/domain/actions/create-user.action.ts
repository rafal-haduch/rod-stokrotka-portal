'use server';

import { revalidateTag } from 'next/cache';
import bcrypt from 'bcrypt';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ActionResult } from '@/shared/contracts/action-result';
import { requireSession } from '@/shared/auth/require-session';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';
import { handleActionError } from '@/shared/error/handle-action-error';

import { parseCreateUserInput } from '@/features/user/domain/user.input-parse';
import { userRepository } from '@/features/user/domain/user.repository';
import { generateLogin, generatePassword } from '@/features/user/domain/user.helpers';
import { CreateUserData } from '@/features/user/domain/user.contracts';

export async function createUser(formData: FormData): Promise<ActionResult<CreateUserData>> {
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
                name: result.name,
                plots: result.plots.map((p) => {
                    return {
                        id: p.plot.id,
                        plotNumber: p.plot.plotNumber,
                    };
                }),
                role: result.role,
                login: result.login,
                password,
                createdAt: result.createdAt,
                lastLogin: null,
            },
        };
    } catch (e) {
        return handleActionError(e);
    }
}
