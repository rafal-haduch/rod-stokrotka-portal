import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

export function validatePlotIds(values: unknown[]): number[] {
    if (!Array.isArray(values)) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    if (values.length === 0) {
        return [];
    }

    if (!values.every((v) => typeof v === 'string')) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = values.map((v) => Number(v));

    if (normalized.some((id) => !Number.isInteger(id) || !Number.isFinite(id) || id < 0)) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    return normalized;
}
