'use server';

import { revalidateTag } from 'next/cache';

import { UpdateUserResult } from '@/contracts/user-actions';

import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { ERROR_MESSAGES } from '@/features/error/error.messages';
import { requireSession } from '@/features/auth/require-session';

import { userRepository } from '../user.repository';
import { parseUpdateUserInput } from '../user.input-parse';
import { isAdminOrBoard } from '../user.helpers';

export async function updateUser(formData: FormData): Promise<UpdateUserResult> {
    try {
        // Session and permission
        const session = await requireSession();

        if (!isAdminOrBoard(session.role)) {
            throw new DomainError(ErrorCode.NO_PERMISSION);
        }

        // Prepare input data (validate and parse)
        const { id, name, role, plotIds } = parseUpdateUserInput(formData);

        // Database operation
        const result = await userRepository.update({ id, name, plotIds, role });

        // Revalidate cache
        revalidateTag('users');

        return {
            success: true,
            data: {
                id: result.id,
                name,
                plots: result.plotsId.map((p) => {
                    return {
                        id: p.plot.id,
                        plotNumber: p.plot.plotNumber,
                    };
                }),
                role,
                createdAt: result.createdAt,
                lastLogin: result.lastLogin,
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
            console.log(e);
            return {
                success: false,
                errorCode: ErrorCode.SERVER_ERROR,
                errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
            };
        }
    }
}
