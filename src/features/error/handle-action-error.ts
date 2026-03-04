import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { ERROR_MESSAGES } from '@/features/error/error.messages';
import { ActionError } from '@/features/error/error.types';

//TODO: write doc
export function handleActionError(e: unknown): ActionError {
    if (e instanceof DomainError) {
        return {
            success: false,
            errorCode: e.code,
            errorMsg: ERROR_MESSAGES[e.code],
        };
    }

    return {
        success: false,
        errorCode: ErrorCode.SERVER_ERROR,
        errorMsg: ERROR_MESSAGES[ErrorCode.SERVER_ERROR],
    };
}
