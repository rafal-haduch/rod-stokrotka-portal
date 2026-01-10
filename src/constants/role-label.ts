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