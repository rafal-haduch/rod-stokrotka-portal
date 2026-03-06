import { ActionResultError } from '@/shared/contracts/action-result';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';
import { ERROR_MESSAGES } from '@/shared/error/error.messages';

//TODO: write doc
export function handleActionError(e: unknown): ActionResultError {
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
