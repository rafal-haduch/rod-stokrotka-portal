import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const adminLogin = process.env.SEED_ADMIN_LOGIN!;
    const adminPassword = process.env.SEED_ADMIN_PASSWORD!;

    if (!adminLogin || !adminPassword) {
        throw new Error('Missing SEED_ADMIN_LOGIN or SEED_ADMIN_PASSWORD in .env');
    }

    const passwordHash = await bcrypt.hash(adminPassword, 10);

    await prisma.user.upsert({
        where: { login: adminLogin },
        update: {},
        create: {
            name: 'Rafał H.',
            login: adminLogin,
            passwordHash,
            role: UserRole.ADMIN,
        },
    });

    const plots = [
        { number: '1', area: 250 },
        { number: '2', area: 150 },
        { number: '3', area: 200.5 },
        // ...
    ];

    for (const plot of plots) {
        await prisma.plot.upsert({
            where: { number: plot.number },
            update: {},
            create: {
                number: plot.number,
                area: plot.area,
            },
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
