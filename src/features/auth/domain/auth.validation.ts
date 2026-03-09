import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';

export function validateUserPassword(value: unknown): string {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const trimmed = value.trim();

    if (trimmed.length === 0) {
        throw new DomainError(ErrorCode.EMPTY_INPUT);
    }

    if (trimmed.length > 128) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    return trimmed;
}
