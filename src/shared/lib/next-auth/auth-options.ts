import Credentials from 'next-auth/providers/credentials';
import { AuthOptions, SessionStrategy } from 'next-auth';
import { UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

import { prisma } from '@/shared/lib/prisma';

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt' as SessionStrategy,
    },
    providers: [
        Credentials({
            credentials: { login: { type: 'text' }, passwordHash: { type: 'password' } },
            authorize: async (credentials) => {
                if (!credentials?.login || !credentials.passwordHash) return null;

                const user = await prisma.user.findUnique({
                    where: { login: credentials.login },
                });
                if (!user) return null;

                const ok = await bcrypt.compare(credentials.passwordHash, user.passwordHash);
                if (!ok) return null;

                return {
                    id: user.id.toString(),
                    name: user.name,
                    role: user.role as UserRole,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role as UserRole;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.id = Number(token.id);
                session.user.name = token.name!;
                session.user.UserUserRole = token.UserUserRole as UserRole;
            }
            return session;
        },
    },
};
