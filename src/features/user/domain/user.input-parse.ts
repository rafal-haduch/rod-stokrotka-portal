import { Role } from '@prisma/client';

import { validateId } from '@/shared/utils/validate-id';

import { validatePlotIds } from '@/features/plot/plot.validation';

import { validateUserName, validateUserRole } from '@/features/user/domain/user.validation';

// === USE CASE: CREATE USER ===

interface CreateUserFormInput {
    name: string;
    role: Role;
    plotIds: number[];
}

/**
 * Parses and validates FormData for the create user use-case.
 *
 * Throws `DomainError` when validation fails.
 *
 * @param formData - Raw form data submitted by the client
 * @returns Validated input ready for user creation
 */
export function parseCreateUserInput(formData: FormData): CreateUserFormInput {
    const nameRaw = formData.get('name');
    const roleRaw = formData.get('role');
    const plotIdsRaw = formData.getAll('plotIds');

    const name = validateUserName(nameRaw);
    const role = validateUserRole(roleRaw);
    const plotIds = validatePlotIds(plotIdsRaw);

    return { name, role, plotIds };
}

// === USE CASE: UPDATE USER ===

interface UpdateUserFormInput {
    id: number;
    name: string;
    role: Role;
    plotIds: number[];
}

/**
 * Parses and validates FormData for the update user use-case.
 *
 * Throws `DomainError` when validation fails.
 *
 * @param formData - Raw form data submitted by the client
 * @returns Validated input ready for user update
 */
export function parseUpdateUserInput(formData: FormData): UpdateUserFormInput {
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

// === USE CASE: DELETE USER ===

interface DeleteUserFormInput {
    id: number;
}

/**
 * Parses and validates FormData for the delete user use-case.
 *
 * Throws `DomainError` when validation fails.
 *
 * @param formData - Raw form data submitted by the client
 * @returns Validated input ready for user deletion
 */
export function parseDeleteUserInput(formData: FormData): DeleteUserFormInput {
    const idRaw = formData.get('userId');

    const id = validateId(idRaw);

    return { id };
}
