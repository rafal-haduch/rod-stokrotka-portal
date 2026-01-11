import { ROLE_LABEL } from '@/constants/role-label';
import { Role } from '@prisma/client';

export function getRoleLabel(role: Role | null | undefined) {
    if (!role) return '-';

    return ROLE_LABEL[role];
}
