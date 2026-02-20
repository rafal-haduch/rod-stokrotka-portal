import { Role } from '@prisma/client';

import { validatePlotIds } from '@/domain/plot/plot.validation';

import { validateId } from '../shared';
import { DomainError } from '../error/domain-error';
import { ErrorCode } from '../error/error-codes';

import { validateUserName, validateUserPassword, validateUserRole } from './user.validation';

// ============================
// === Create user use-case ===
// ============================

interface CreateUserInput {
    name: string;
    role: Role;
    plotIds: number[];
}

/**
 * Parses and validates FormData for the create user use-case.
 * Throws DomainError when validation fails.
 */
export function parseCreateUserInput(formData: FormData): CreateUserInput {
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');
    const plotIdsRaw = formData.getAll('plotIds');

    const name = validateUserName(nameRaw);
    const role = validateUserRole(roleRaw);
    const plotIds = validatePlotIds(plotIdsRaw);

    return { name, role, plotIds };
}

// ============================
// === Update user use-case ===
// ============================

interface UpdateUserInput {
    id: number;
    name: string;
    role: Role;
    plotIds: number[];
}

/**
 * Parses and validates FormData for the update user use-case.
 * Throws DomainError when validation fails.
 */
export function parseUpdateUserInput(formData: FormData): UpdateUserInput {
    const idRaw = formData.get('id');
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');
    const plotIdsRaw = formData.getAll('plotIds');

    const id = validateId(idRaw);
    const name = validateUserName(nameRaw);
    const role = validateUserRole(roleRaw);
    const plotIds = validatePlotIds(plotIdsRaw);

    return { id, name, role, plotIds };
}

// ============================
// === Delete user use-case ===
// ============================

interface DeleteUserInput {
    id: number;
}

/**
 * Parses and validates FormData for the delete user use-case.
 * Throws DomainError when validation fails.
 */
export function parseDeleteUserInput(formData: FormData): DeleteUserInput {
    const idRaw = formData.get('userId');

    const id = validateId(idRaw);

    return { id };
}

// ================================
// === Change password use-case ===
// ================================

interface ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}

/**
 * Parses and validates FormData for the change password use-case.
 * Performs additional password consistency checks.
 * Throws DomainError when validation fails.
 */
export function parseChangePasswordInput(formData: FormData): ChangePasswordInput {
    const currentPasswordRaw = formData.get('currentPassword');
    const newPasswordRaw = formData.get('newPassword');
    const newPasswordRepeatRaw = formData.get('newPasswordRepeat');

    // Basic validation
    if (newPasswordRaw !== newPasswordRepeatRaw) {
        throw new DomainError(ErrorCode.NEW_PASSWORDS_MISMATCH);
    }

    if (newPasswordRaw === currentPasswordRaw) {
        throw new DomainError(ErrorCode.SAME_NEW_PASSWORD);
    }

    const currentPassword = validateUserPassword(currentPasswordRaw);
    const newPassword = validateUserPassword(newPasswordRaw);

    return { currentPassword, newPassword };
}
