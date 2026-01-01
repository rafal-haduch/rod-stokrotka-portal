import { Role } from '@prisma/client';

export const ROLE_LABEL: Record<Role, string> = {
    [Role.ADMIN]: 'Administrator strony',
    [Role.PRESIDENT]: 'Prezes',
    [Role.DEPUTY_PRESIDENT]: 'Zastępca Prezesa',
    [Role.SECRETARY]: 'Sekretarz',
    [Role.TREASURER]: 'Skarbnik',
    [Role.BOARD_MEMBER]: 'Członek Zarządu',
    [Role.ALLOTMENT_GARDENER]: 'Działkowiec',
};

export const adminRoles: Role[] = [
    Role.ADMIN,
    Role.PRESIDENT,
    Role.DEPUTY_PRESIDENT,
    Role.SECRETARY,
    Role.TREASURER,
    Role.BOARD_MEMBER,
];
