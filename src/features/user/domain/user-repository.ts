import { UserRole } from '@prisma/client';

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
    plotIds: number[];
    role: UserRole;
    login: string;
    passwordHash: string;
}

interface UpdateUserDbInput {
    id: number;
    name: string;
    plotIds: number[];
    role: UserRole;
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
    async create({ name, plotIds, role, login, passwordHash }: CreateUserDbInput) {
        return prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name: name,
                    login: login,
                    passwordHash: passwordHash,
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

    /**
     * Updates user data and plot assignments.
     *
     * This operation is executed inside a transaction.
     * @returns The updated user including assigned plots.
     */
    async update({ id, name, plotIds, role }: UpdateUserDbInput) {
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
                plots: {
                    include: {
                        plot: true,
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
