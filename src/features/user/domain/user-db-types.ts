import { User, UserPlot, Plot, Prisma } from '@prisma/client';

// === TYPES WITH RELATIONS (INCLUDE) ===

/**
 * Represents a user row from the database.
 */
export type UserFromDb = User;

/**
 * Represents a user with all assigned plots included.
 */
export type UserWithPlotsFromDb = User & {
    plots: (UserPlot & {
        plot: Plot;
    })[];
};

/**
 * Array of users from the database.
 */
export type UsersFromDb = User[];

/**
 * Array of users with plots included.
 */
export type UsersWithPlotsFromDb = UserWithPlotsFromDb[];

// ===  SELECTED FIELDS TYPES (SELECT)  ===

/**
 * Selection for retrieving a user's profile for user profile panel view
 */
export const userProfileSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: {
        name: true,
        login: true,
        role: true,
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

/**
 * Type representing the result of `userTableRowsSelect`.
 */
export type UserTableRowsFromDb = Prisma.UserGetPayload<typeof userTableRowsSelect>[];
