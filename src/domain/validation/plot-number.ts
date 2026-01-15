import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

export function validatePlotNumber(value: unknown): string {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = value.trim().toUpperCase();

    if (normalized.length === 0) {
        throw new DomainError(ErrorCode.EMPTY_INPUT);
    }

    if (normalized.length > 5) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    if (!/^\d{1,3}[A-Z]?$/.test(normalized)) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    return normalized;
}
