import { adminRoles, ROLE_LABEL } from '@/features/user//domain/user.constants';
import { Role } from '@prisma/client';

/**
 * @returns A Polish display label for the given role. If role is missing, returns a fallback placeholder `-`.
 */
export function getRoleLabel(role: Role | null | undefined) {
    if (!role) return '-';

    return ROLE_LABEL[role];
}

/**
 * Checks whether the role has administrative or board-level privileges.
 * @returns `true` if the given role belongs to the admin or board roles group.
 */
export function isAdminOrBoard(userRole: Role): boolean {
    return adminRoles.includes(userRole as Role);
}
