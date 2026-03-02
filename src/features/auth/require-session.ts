import { Role } from '@prisma/client';
import { DomainError } from '@/features/error/domain-error';
import { ErrorCode } from '@/features/error/error-codes';
import { getUserSession } from '@/lib/auth/get-user-session';

export interface UserSession {
    name: string;
    id: number;
    role: Role;
}

export async function requireSession(): Promise<UserSession> {
    const session = await getUserSession();

    if (!session || !session.role || !session.id || !session.name) {
        throw new DomainError(ErrorCode.NO_SESSION);
    }

    return {
        id: session.id,
        name: session.name,
        role: session.role,
    };
}
