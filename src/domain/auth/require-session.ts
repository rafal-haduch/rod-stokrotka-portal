import { Role } from '@prisma/client';
import { DomainError } from '@/errors/domain-error';
import { ErrorCode } from '@/errors/error-codes';
import { getUserSession } from '@/utils/getUserSession';

export interface userSession {
    name: string;
    id: number;
    role: Role;
}

export async function requireSession(): Promise<userSession> {
    //TODO: change destructuryzation?
    const session = await getUserSession();

    if (!session || !session.role || !session.id) {
        throw new DomainError(ErrorCode.NO_SESSION);
    }

    return {
        name: session.name,
        id: session.id,
        role: session.role,
    };
}
