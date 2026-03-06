import { DomainError } from '../../shared/error/domain-error';
import { ErrorCode } from '../../shared/error/error-codes';

// Ids
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

// Number
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

// Area
export function validatePlotArea(value: unknown): number | null {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    let normalized: number | null = null;

    if (value.trim() !== '') {
        normalized = Number(value.trim());

        if (!Number.isFinite(normalized) || normalized < 0) {
            throw new DomainError(ErrorCode.INVALID_INPUT);
        }
    }

    return normalized;
}
