import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

interface CreateUserData {
    name: string;
    plotIds: number[];
    role: Role;
    login: string;
    passwordHash: string;
}

interface UpdateUserData {
    id: number;
    name: string;
    plotIds: number[];
    role: Role;
}

export const userRepository = {
    // OPERATIONS: CREATE, UPDATE, DELETE
    async create({ name, plotIds, role, login, passwordHash }: CreateUserData) {
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name: name,
                    login: login,
                    password: passwordHash,
                    role: role,
                },
            });

            if (plotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: plotIds.map((id) => ({
                        userId: user.id,
                        plotId: id,
                    })),
                });
            }
        });
    },

    async update({ id, name, plotIds, role }: UpdateUserData) {
        await prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id },
                data: { name, role },
            });

            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            if (plotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: plotIds.map((plotId) => ({
                        userId: id,
                        plotId: plotId,
                    })),
                });
            }
        });
    },

    async delete(id: number) {
        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            await tx.user.delete({
                where: { id },
            });
        });
    },

    // OPERATIONS: READ
    async findById(id: number) {
        return prisma.user.findUnique({
            where: { id },
        });
    },

    async findByIdWithPlots(id: number) {
        return prisma.user.findUnique({
            where: { id },
            include: {
                plotsId: {
                    include: {
                        plot: true,
                    },
                },
            },
        });
    },

    async findMany() {
        return prisma.user.findMany();
    },

    async findManyWithPlots() {
        return prisma.user.findMany({
            include: {
                plotsId: {
                    include: {
                        plot: true,
                    },
                },
            },
        });
    },

    // SPECIAL OPERATIONS:
    async changePassword(id: number, newPasswordHash: string) {
        await prisma.user.update({
            where: { id },
            data: { password: newPasswordHash },
        });
    },
};
