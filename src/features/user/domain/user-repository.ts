import { PlotRole, UserRole } from '@prisma/client';

import { prisma } from '@/shared/lib/prisma';

import {
    UserProfileFromDb,
    userProfileSelect,
    UserTableRowsFromDb,
    userTableRowsSelect,
} from '@/features/user/domain/user-db-types';

// === TYPES FOR DB OPERATIONS ===

interface CreateUserDbInput {
    name: string;
    role: UserRole;
    login: string;
    passwordHash: string;
    ownedPlotIds: number[];
    coOwnedPlotIds: number[];
    usedPlotIds: number[];
}

interface UpdateUserDbInput {
    id: number;
    name: string;
    role: UserRole;
    ownedPlotIds: number[];
    coOwnedPlotIds: number[];
    usedPlotIds: number[];
}

// === USER REPOSITORY ===

export const userRepository = {
    // === TRANSACTIONAL OPERATIONS (CREATE, UPDATE, DELETE) ===

    /**
     * Creates a new user along with assigned plots if provided.
     *
     * This operation is executed inside a transaction.
     * @returns The newly created user including assigned plots.
     */
    async create({
        name,
        role,
        login,
        passwordHash,
        ownedPlotIds,
        coOwnedPlotIds,
        usedPlotIds,
    }: CreateUserDbInput) {
        return prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name: name,
                    login: login,
                    passwordHash: passwordHash,
                    role: role,
                },
            });

            if (ownedPlotIds.length > 0) {
                await tx.plot.updateMany({
                    where: {
                        id: {
                            in: ownedPlotIds,
                        },
                    },
                    data: {
                        ownerId: user.id,
                    },
                });
            }

            if (coOwnedPlotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: coOwnedPlotIds.map((id) => ({
                        userId: user.id,
                        plotId: id,
                        role: PlotRole.CO_OWNER,
                    })),
                });
            }

            if (usedPlotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: usedPlotIds.map((id) => ({
                        userId: user.id,
                        plotId: id,
                        role: PlotRole.USER,
                    })),
                });
            }

            return tx.user.findUniqueOrThrow({
                where: { id: user.id },
                include: {
                    ownedPlots: {
                        select: {
                            id: true,
                            number: true,
                        },
                    },
                    plotMemberships: {
                        select: {
                            role: true,
                            plot: {
                                select: {
                                    id: true,
                                    number: true,
                                },
                            },
                        },
                    },
                },
            });
        });
    },

    /**
     * Updates user data and plot assignments.
     *
     * This operation is executed inside a transaction.
     * @returns The updated user including assigned plots.
     */
    async update({ id, name, role, ownedPlotIds, coOwnedPlotIds, usedPlotIds }: UpdateUserDbInput) {
        return prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id },
                data: { name, role },
            });

            await tx.plot.updateMany({
                where: {
                    id: {
                        in: ownedPlotIds,
                    },
                },
                data: {
                    ownerId: null,
                },
            });

            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            if (ownedPlotIds.length > 0) {
                await tx.plot.updateMany({
                    where: {
                        id: {
                            in: ownedPlotIds,
                        },
                    },
                    data: {
                        ownerId: id,
                    },
                });
            }

            if (coOwnedPlotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: coOwnedPlotIds.map((id) => ({
                        userId: id,
                        plotId: id,
                        role: PlotRole.CO_OWNER,
                    })),
                });
            }

            if (usedPlotIds.length > 0) {
                await tx.userPlot.createMany({
                    data: usedPlotIds.map((id) => ({
                        userId: id,
                        plotId: id,
                        role: PlotRole.USER,
                    })),
                });
            }

            return tx.user.findUniqueOrThrow({
                where: { id: id },
                include: {
                    ownedPlots: {
                        select: {
                            id: true,
                            number: true,
                        },
                    },
                    plotMemberships: {
                        select: {
                            role: true,
                            plot: {
                                select: {
                                    id: true,
                                    number: true,
                                },
                            },
                        },
                    },
                },
            });
        });
    },

    /**
     * Deletes a user by ID and all associated plot assignments.
     *
     * This operation is executed inside a transaction.
     * @param id - User ID to delete.
     */
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

    // === GENERAL FINDERS (INCLUDE RELATIONS) ===

    /**
     * Retrieves a user by ID.
     * @param id - User ID.
     */
    async findById(id: number) {
        return prisma.user.findUnique({
            where: { id },
        });
    },

    /**
     * Retrieves a user by ID including assigned plots.
     * @param id - User ID.
     */
    async findByIdWithPlots(id: number) {
        return prisma.user.findUnique({
            where: { id: id },
            include: {
                ownedPlots: {
                    select: {
                        id: true,
                        number: true,
                    },
                },
                plotMemberships: {
                    select: {
                        role: true,
                        plot: {
                            select: {
                                id: true,
                                number: true,
                            },
                        },
                    },
                },
            },
        });
    },

    /**
     * Retrieves all users without relations.
     */
    async findMany() {
        return prisma.user.findMany();
    },

    /**
     * Retrieves all users including assigned plots.
     */
    async findManyWithPlots() {
        return prisma.user.findMany({
            include: {
                ownedPlots: {
                    select: {
                        id: true,
                        number: true,
                    },
                },
                plotMemberships: {
                    select: {
                        role: true,
                        plot: {
                            select: {
                                id: true,
                                number: true,
                            },
                        },
                    },
                },
            },
        });
    },

    // === USE CASE SPECIFIC QUERIES (SELECT SUBSETS) ===

    /**
     * Retrieves a user profile by ID.
     * @param id - User ID.
     * @returns Selected user profile or null if not found.
     */
    async getUserProfile(id: number): Promise<UserProfileFromDb | null> {
        return prisma.user.findUnique({
            where: { id },
            select: userProfileSelect.select,
        });
    },

    /**
     * Retrieves all users for table display.
     * @returns Array of user table rows.
     */
    async getUserTableRows(): Promise<UserTableRowsFromDb> {
        return await prisma.user.findMany(userTableRowsSelect);
    },

    /**
     * Retrieves a user's password hash.
     * @param id - User ID.
     * @returns Object containing password hash or null if not found.
     */
    async getUserPassword(id: number) {
        return await prisma.user.findUnique({
            where: { id },
            select: { passwordHash: true },
        });
    },

    /**
     * Updates a user's password hash.
     * @param id - User ID.
     */
    async updatePasswordHash(id: number, newPasswordHash: string) {
        await prisma.user.update({
            where: { id },
            data: { passwordHash: newPasswordHash },
        });
    },
};
