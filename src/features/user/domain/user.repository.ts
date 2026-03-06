import { Role } from '@prisma/client';

import { prisma } from '@/shared/lib/prisma';
import {
    UserProfileFromDb,
    userProfileSelect,
    UserTableRowsFromDb,
    userTableRowsSelect,
} from './user.db-types';

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
    // === GENERAL QUERIES (USING INCLUDE) ===

    async create({ name, plotIds, role, login, passwordHash }: CreateUserData) {
        return prisma.$transaction(async (tx) => {
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
            return tx.user.findUniqueOrThrow({
                where: { id: user.id },
                include: {
                    plots: {
                        select: {
                            plot: {
                                select: {
                                    id: true,
                                    plotNumber: true,
                                },
                            },
                        },
                    },
                },
            });
        });
    },

    async update({ id, name, plotIds, role }: UpdateUserData) {
        return prisma.$transaction(async (tx) => {
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
            return tx.user.findUniqueOrThrow({
                where: { id },
                include: {
                    plots: {
                        include: {
                            plot: true,
                        },
                    },
                },
            });
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

    async findById(id: number) {
        return prisma.user.findUnique({
            where: { id },
        });
    },

    async findByIdWithPlots(id: number) {
        return prisma.user.findUnique({
            where: { id },
            include: {
                plots: {
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
                plots: {
                    include: {
                        plot: true,
                    },
                },
            },
        });
    },

    /* === USE CASES INQUIRIES (USING SELECT) === */

    async getUserProfile(id: number): Promise<UserProfileFromDb | null> {
        return prisma.user.findUnique({
            where: { id },
            select: userProfileSelect.select,
        });
    },

    async getUserTableRows(): Promise<UserTableRowsFromDb> {
        return await prisma.user.findMany(userTableRowsSelect);
    },

    async updatePasswordHash(id: number, newPasswordHash: string) {
        await prisma.user.update({
            where: { id },
            data: { password: newPasswordHash },
        });
    },

    async getUserPassword(id: number) {
        return await prisma.user.findUnique({
            where: { id },
            select: { password: true },
        });
    },
};
