import { AuthOptions, SessionStrategy } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt' as SessionStrategy, // jawnie rzutujemy na typ
    },
    providers: [
        Credentials({
            credentials: { login: { type: 'text' }, password: { type: 'password' } },
            authorize: async (credentials) => {
                if (!credentials?.login || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { login: credentials.login },
                });
                if (!user) return null;

                const ok = await bcrypt.compare(credentials.password, user.password);
                if (!ok) return null;

                return {
                    id: user.id.toString(),
                    name: user.name,
                    role: user.role as Role,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role as Role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.id = Number(token.id);
                session.user.name = token.name!;
                session.user.role = token.role as Role;
            }
            return session;
        },
    },
};
