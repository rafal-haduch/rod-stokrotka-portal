import { DomainError } from '../error/domain-error';
import { ErrorCode } from '../error/error-codes';

// TODO: write doc
export function validateId(value: unknown): number {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const trimmed = value.trim();

    if (trimmed === '') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = Number(trimmed);

    if (!Number.isFinite(normalized) || !Number.isInteger(normalized) || normalized < 0) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    return normalized;
}
