import { Role } from '@prisma/client';

const adminRoles: Role[] = [
    Role.ADMIN,
    Role.PRESIDENT,
    Role.DEPUTY_PRESIDENT,
    Role.SECRETARY,
    Role.TREASURER,
    Role.BOARD_MEMBER,
];

export function isAdminOrBoard(userRole: Role): boolean {
    return adminRoles.includes(userRole as Role);
}
