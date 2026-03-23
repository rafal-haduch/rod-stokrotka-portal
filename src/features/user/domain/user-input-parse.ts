import { UserRole } from '@prisma/client';

import { validateId } from '@/shared/utils/validate-id';

import { validatePlotIds } from '@/features/plot/domain/plot-validation';

import { validateUserName, validateRole } from '@/features/user/domain/user-validation';
import { PlotIdsAssignedToUser, UserBase } from '@/features/user/domain/user-types';

// --- USE CASE: CREATE USER --

interface CreateUserFormInput extends PlotIdsAssignedToUser {
    name: string;
    role: UserRole;
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
    const ownedPlotIdRaw = formData.getAll('ownedPlotIds');
    const coOwnedPlotIdRaw = formData.getAll('coOwnedPlotIds');
    const usedPlotIdRaw = formData.getAll('usedPlotIds');

    const name = validateUserName(nameRaw);
    const role = validateRole(roleRaw);
    const ownedPlotIds = validatePlotIds(ownedPlotIdRaw);
    const coOwnedPlotIds = validatePlotIds(coOwnedPlotIdRaw);
    const usedPlotIds = validatePlotIds(usedPlotIdRaw);

    return { name, role, ownedPlotIds, coOwnedPlotIds, usedPlotIds };
}

// === USE CASE: UPDATE USER ===

interface UpdateUserFormInput extends UserBase, PlotIdsAssignedToUser {}

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
    const ownedPlotIdRaw = formData.getAll('ownedPlotIds');
    const coOwnedPlotIdRaw = formData.getAll('coOwnedPlotIds');
    const usedPlotIdRaw = formData.getAll('usedPlotIds');

    const id = validateId(idRaw);
    const name = validateUserName(nameRaw);
    const role = validateRole(roleRaw);
    const ownedPlotIds = validatePlotIds(ownedPlotIdRaw);
    const coOwnedPlotIds = validatePlotIds(coOwnedPlotIdRaw);
    const usedPlotIds = validatePlotIds(usedPlotIdRaw);

    return { id, name, role, ownedPlotIds, coOwnedPlotIds, usedPlotIds };
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
