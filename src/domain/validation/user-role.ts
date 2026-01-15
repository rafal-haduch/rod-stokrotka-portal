import { Role } from '@prisma/client';
import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

export function validateUserRole(value: unknown): Role {
    if (typeof value !== 'string') {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    if (!Object.values(Role).includes(value as Role)) {
        throw new DomainError(ErrorCode.INVALID_INPUT);
    }

    const normalized = value as Role;

    return normalized;
}
