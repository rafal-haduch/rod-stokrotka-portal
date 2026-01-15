import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

export function validatePlotArea(value: unknown) {
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
