import { UserRole } from '@prisma/client';

import { ADMIN_AND_BOARD_ROLES } from '@/shared/auth/permissions';

/**
 * Checks whether the UserRole has administrative or board-level privileges.
 * @returns `true` if the given UserRole belongs to the admin or boUserRoleUserRoles group.
 */
export function isAdminOrBoard(role: UserRole): boolean {
    return ADMIN_AND_BOARD_ROLES.includes(role as UserRole);
}
