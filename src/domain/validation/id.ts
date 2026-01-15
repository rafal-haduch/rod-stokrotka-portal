import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

export function validateId(value: unknown) {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = Number(value.trim());

    if (!Number.isFinite(normalized) || !Number.isInteger(normalized) || normalized < 0) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    return normalized;
}
