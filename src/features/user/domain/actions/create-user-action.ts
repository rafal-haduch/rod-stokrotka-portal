'use server';

import { revalidateTag } from 'next/cache';
import bcrypt from 'bcrypt';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ActionResult } from '@/shared/contracts/action-result';
import { requireSession } from '@/shared/auth/require-session';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';
import { handleActionError } from '@/shared/error/handle-action-error';

import { parseCreateUserInput } from '@/features/user/domain/user-input-parse';
import { userRepository } from '@/features/user/domain/user-repository';
import { generateLogin, generatePassword } from '@/features/user/domain/user-helpers';
import { CreatedUserData } from '@/features/user/domain/user-api-contracts';
import { mapToCreatedUserData } from '@/features/user/domain/user-mapper';

export async function createUser(formData: FormData): Promise<ActionResult<CreatedUserData>> {
    try {
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        const { name, role, plotIds } = parseCreateUserInput(formData);

        const login = generateLogin(name);
        const password = generatePassword();
        const passwordHash = await bcrypt.hash(password, 10);

        const result = await userRepository.create({ name, plotIds, role, login, passwordHash });

        revalidateTag('users');

        // NOTE: The login and password are returned because they are needed to be passed on to the user for whom the account was created.
        return {
            success: true,
            data: mapToCreatedUserData(result, password),
        };
    } catch (e) {
        return handleActionError(e);
    }
}
