import { Prisma } from '@prisma/client';

import { ActionResultError } from '@/shared/contracts/action-result';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ERROR_MESSAGES } from '@/shared/error/error-messages';

/**
 * Converts thrown errors into a standardized ActionResultError.
 * Handles domain errors and infrastructure errors (e.g. Prisma).
 */
export function handleActionError(e: unknown): ActionResultError {
    if (e instanceof DomainError) {
        return {
            success: false,
            errorCode: e.code,
            errorMsg: ERROR_MESSAGES[e.code],
        };
    }

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('Database error:', e);

        return {
            success: false,
            errorCode: ErrorCode.DATABASE_ERROR,
            errorMsg: ERROR_MESSAGES[ErrorCode.DATABASE_ERROR],
        };
    }

    console.error('Unhandled error: ', e);

    return {
        success: false,
        errorCode: ErrorCode.SERVER_ERROR,
        errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
    };
}
