import { AssignmentPlotToUser } from '@/features/plot/domain/plot-db-types';
import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';
import { User, UserPlot, Plot, Prisma, PlotRole } from '@prisma/client';

/**
 * Represents a user row from the database.
 */
export type UserFromDb = User;

/**
 * Array of users from the database.
 */
export type UsersFromDb = UserFromDb[];

export const userWithPlotsInclude = Prisma.validator<Prisma.UserDefaultArgs>()({
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

/**
 * Represents a user with all assigned plots included.
 */
export type UserWithPlotsFromDb = Prisma.UserGetPayload<typeof userWithPlotsInclude>;

/**
 * Array of users with  all assigned plots included.
 */
export type UsersWithPlotsFromDb = UserWithPlotsFromDb[];

/**
 * Selection for retrieving a user's profile for user profile panel view
 */
export const userProfileSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: {
        id: true,
        name: true,
        login: true,
        role: true,
        createdAt: true,
    },
});

/**
 * Type representing the result of `userProfileSelect`.
 */
export type UserProfileFromDb = Prisma.UserGetPayload<typeof userProfileSelect>;

/**
 * Selection for retrieving user table rows for admin views or lists.
 */
export const userTableRowsSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: {
        id: true,
        name: true,
        role: true,
        createdAt: true,
        lastLogin: true,
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

/**
 * Type representing the result of `userTableRowsSelect`.
 */
export type UserTableRowsFromDb = Prisma.UserGetPayload<typeof userTableRowsSelect>[];
