import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt', // <-- literal "jwt" zamiast string
    },
    providers: [
        Credentials({
            credentials: {
                login: { type: 'text' },
                password: { type: 'password' },
            },
            authorize: async (credentials) => {
                if (!credentials?.login || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { login: credentials.login },
                });
                if (!user) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;

                return { id: user.id, name: user.name, role: user.role };
            },
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
