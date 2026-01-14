import { Role } from '@prisma/client';
import { prisma } from '../prisma';

interface CreateUserData {
    name: string;
    plotId: number[];
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

interface DeleteUserData {
    id: number;
}

interface GetUserForProfilePageData {
    id: number;
}

interface ChangePassword {
    id: number;
    newPasswordHash: string;
}

export const userRepository = {
    async create({ name, plotId, role, login, passwordHash }: CreateUserData) {
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name: name,
                    login: login,
                    password: passwordHash,
                    role: role,
                },
            });

            if (plotId.length > 0) {
                await tx.userPlot.createMany({
                    data: plotId.map((id) => ({
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

    async delete({ id }: DeleteUserData) {
        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            await tx.user.delete({
                where: { id },
            });
        });
    },

    async getUserForProfilePage({ id }: GetUserForProfilePageData) {
        console.log(id);
        return prisma.user.findUnique({
            where: { id: id },
            include: {
                plotsId: {
                    include: {
                        plot: {
                            select: { plotNumber: true },
                        },
                    },
                },
            },
        });
    },

    async changePassword({ id, newPasswordHash }: ChangePassword) {
        await prisma.user.update({
            where: { id },
            data: { password: newPasswordHash },
        });
    },
};
