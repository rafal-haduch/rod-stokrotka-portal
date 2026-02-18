import { Role } from '@prisma/client';
import { DomainError } from '../error/domain-error';
import { ErrorCode } from '../error/error-codes';
import { isAdminOrBoard } from '../permissions/is-admin-or-board';

export function enforcePasswordPolicy(password: string, role: Role): void {
    if (isAdminOrBoard(role)) {
        if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password) || password.length < 8) {
            throw new DomainError(ErrorCode.WEAK_PASSWORD);
        }
    } else {
        if (password.length < 8) {
            throw new DomainError(ErrorCode.WEAK_PASSWORD);
        }
    }
}
