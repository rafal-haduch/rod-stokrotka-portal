import { UserRole } from '@prisma/client';
import { PermissionKeys, PERMISSIONS } from './permissions';

export function canPerform(role: UserRole, permission: PermissionKeys): boolean {
    return PERMISSIONS[permission].includes(role);
}
