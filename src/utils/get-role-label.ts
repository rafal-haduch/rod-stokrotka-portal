import { ROLE_LABEL } from '@/domain/user/user.constants';
import { Role } from '@prisma/client';

export function getRoleLabel(role: Role | null | undefined) {
    if (!role) return '-';

    return ROLE_LABEL[role];
}
