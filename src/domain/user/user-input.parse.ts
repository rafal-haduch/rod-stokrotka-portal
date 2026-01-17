import { Role } from '@prisma/client';
import { validateUserName, validateUserPassword, validateUserRole } from './user.validation';
import { validatePlotIds } from '@/domain/plot/plot.validation';
import { validateId } from '../shared';
import { DomainError } from '../errors/domain-error';
import { ErrorCode } from '../errors/error-codes';

// CREATE USER ACTION
export interface CreateUserInput {
    name: string;
    role: Role;
    plotIds: number[];
}

export function parseCreateUserInput(formData: FormData): CreateUserInput {
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');
    const plotIdsRaw = formData.getAll('plotIds');

    const name = validateUserName(nameRaw);
    const role = validateUserRole(roleRaw);
    const plotIds = validatePlotIds(plotIdsRaw);

    return { name, role, plotIds };
}

// UPDATE USER ACTION
export interface UpdateUserInput {
    id: number;
    name: string;
    role: Role;
    plotIds: number[];
}

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

// DELETE USER ACTION
export interface DeleteUserInput {
    id: number;
}

export function parseDeleteUserInput(formData: FormData): DeleteUserInput {
    const idRaw = formData.get('id');

    const id = validateId(idRaw);

    return { id };
}

// CHANGE PASSWORD ACTION
export interface ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}

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
