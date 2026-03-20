import { UserRole } from '@prisma/client';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';

export function validateRole(value: unknown): UserRole {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    if (!(value in UserRole)) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = value as UserRole;

    return normalized;
}

const NAME_REGEX = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]{1,29}\s[A-ZĄĆĘŁŃÓŚŻŹ]\.$/;
export function validateUserName(value: unknown): string {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    if (value.trim() === '') {
        throw new DomainError(ErrorCode.EMPTY_INPUT);
    }

    const normalized = value
        .trim()
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .replace(
            /^([a-ząćęłńóśżź])([a-ząćęłńóśżź]+)\s([a-ząćęłńóśżź])\.?$/i,
            (_, first, rest, lastInitial) =>
                first.toUpperCase() + rest.toLowerCase() + ' ' + lastInitial.toUpperCase() + '.'
        );

    if (!NAME_REGEX.test(normalized)) {
        throw new DomainError(ErrorCode.INVALID_INPUT, 'name');
    }

    return normalized;
}
