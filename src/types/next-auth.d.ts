import { Role } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            role: Role;
        } & DefaultSession['user'];
    }

    interface User {
        id: number;
        role: Role;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: number;
        role: Role;
    }
}
