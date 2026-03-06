import { Role } from '@prisma/client';

import { validateId } from '@/shared/utils/validate-id';

import { validatePlotIds } from '@/features/plot/plot.validation';

import { validateUserName, validateUserRole } from '@/features/user/domain/user.validation';

// === CREATE USER USE CASE ===

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

// === UPDATE USER USE CASE ===

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

// === DELETE USER USE CASE ===

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
