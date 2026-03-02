import { Role } from '@prisma/client';
import { PermissionKeys, PERMISSIONS } from './permissions';

export function canPerform(role: Role, permission: PermissionKeys): boolean {
    return PERMISSIONS[permission].includes(role);
}
