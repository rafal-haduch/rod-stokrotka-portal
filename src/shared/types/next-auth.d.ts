import { UserRole } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        role: UserRole;
    }

    interface Session {
        user: {
            id: number;
            name: string;
            role: UserRole;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        name: string;
        role: UserRole;
    }
}
