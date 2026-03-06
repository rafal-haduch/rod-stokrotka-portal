import { Role } from '@prisma/client';

import { ADMIN_AND_BOARD_ROLES } from '@/shared/auth/permissions';

/**
 * Checks whether the role has administrative or board-level privileges.
 * @returns `true` if the given role belongs to the admin or board roles group.
 */
export function isAdminOrBoard(userRole: Role): boolean {
    return ADMIN_AND_BOARD_ROLES.includes(userRole as Role);
}
