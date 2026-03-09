import { Role } from '@prisma/client';

import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';

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
