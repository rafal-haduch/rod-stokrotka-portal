import { ROLE_LABEL } from '@/constants/roles';
import { Role } from '@prisma/client';

export function getRoleLabel(role: Role | null | undefined) {
    if (!role) return '-';

    return ROLE_LABEL[role];
}
