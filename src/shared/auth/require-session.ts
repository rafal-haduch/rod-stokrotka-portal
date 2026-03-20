import { UserRole } from '@prisma/client';

import { getUserSession } from '@/shared/lib/next-auth/get-user-session';

import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';

export interface UserSession {
    name: string;
    id: number;
    role: UserRole;
}

export async function requireSession(): Promise<UserSession> {
    const session = await getUserSession();

    if (!session || !session.UserRole || !session.id || !session.name) {
        throw new DomainError(ErrorCode.NO_SESSION);
    }

    return {
        id: session.id,
        name: session.name,
        role: session.role,
    };
}
