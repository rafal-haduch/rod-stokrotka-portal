import { UserRole } from '@prisma/client';

/**
 * Mapping UserRoles to Polish UI labels.
 */
export const USER_ROLE_LABEL: Record<UserRole, string> = {
    [UserRole.ADMIN]: 'Administrator',
    [UserRole.PRESIDENT]: 'Prezes',
    [UserRole.DEPUTY_PRESIDENT]: 'Zastępca Prezesa',
    [UserRole.SECRETARY]: 'Sekretarz',
    [UserRole.TREASURER]: 'Skarbnik',
    [UserRole.BOARD_MEMBER]: 'Członek Zarządu',
    [UserRole.ALLOTMENT_GARDENER]: 'Działkowiec',
};

/**
 * UserRoles that can be assigned to users in the CMS app.
 * Admin is excluded because it shouldn't be assigned from the app.
 */
export const ASSIGNABLE_USER_ROLES = Object.values(UserRole).filter((r) => r !== UserRole.ADMIN);
