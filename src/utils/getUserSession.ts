import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession, Session, User } from 'next-auth';

export async function getUserSession(): Promise<User | null> {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return null;
    return session.user;
}
