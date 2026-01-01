import { adminRoles } from '@/constants/roles';
import { Role } from '@prisma/client';

export function isAdminOrBoard(userRole: Role): boolean {
    return adminRoles.includes(userRole as Role);
}
