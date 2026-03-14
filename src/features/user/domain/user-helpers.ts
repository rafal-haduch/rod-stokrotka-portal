import { randomBytes } from 'crypto';
import { Role } from '@prisma/client';

import { ROLE_LABEL } from '@/features/user/domain/user-constants';

/**
 * @returns A Polish display label for the given role. If role is missing, returns a fallback placeholder `-`.
 */
export function getRoleLabel(role: Role | null | undefined) {
    if (!role) return '-';

    return ROLE_LABEL[role];
}

/**
 * Generates a unique login based on the provided full name.
 *
 * Used during user account creation and when updating the user's name.
 *
 * @returns User login in the format: name.s.123
 */
export function generateLogin(name: string) {
    const normalizedName = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '.');

    const numberSuffix = Math.floor(Math.random() * 900) + 100;

    return normalizedName + numberSuffix;
}

/**
 * Generates a random temporary password for a new user account.
 *
 * The password is a 12-character alphanumeric string derived from
 * a base-64url encoded random value.
 *
 * @returns Random temporary password
 */
export function generatePassword(): string {
    return randomBytes(9).toString('base64url');
}
