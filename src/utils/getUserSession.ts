import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// REVIEW: poprawic zwracany typ dla funkcje requireSession()
export async function getUserSession() {
    const session = await getServerSession(authOptions);
    return session?.user ?? null;
}
