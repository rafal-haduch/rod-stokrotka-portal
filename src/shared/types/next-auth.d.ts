import { Role } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        role: Role;
    }

    interface Session {
        user: {
            id: number;
            name: string;
            role: Role;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        name: string;
        role: Role;
    }
}
