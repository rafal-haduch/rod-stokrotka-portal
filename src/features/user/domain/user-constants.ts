import { Role } from '@prisma/client';

/**
 * Mapping roles to Polish UI labels.
 */
export const ROLE_LABEL: Record<Role, string> = {
    [Role.ADMIN]: 'Administrator strony',
    [Role.PRESIDENT]: 'Prezes',
    [Role.DEPUTY_PRESIDENT]: 'Zastępca Prezesa',
    [Role.SECRETARY]: 'Sekretarz',
    [Role.TREASURER]: 'Skarbnik',
    [Role.BOARD_MEMBER]: 'Członek Zarządu',
    [Role.ALLOTMENT_GARDENER]: 'Działkowiec',
};

/**
 * Roles that can be assigned to users in the CMS app.
 * Admin is excluded because it shouldn't be assigned from the app.
 */
export const ASSIGNABLE_ROLES = Object.values(Role).filter((r) => r !== Role.ADMIN);
