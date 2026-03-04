import { User, UserPlot, Plot, Prisma } from '@prisma/client';

// === BASE TYPES FOR INCLUDE ===

export type UserFromDb = User;

export type UserWithPlotsFromDb = User & {
    plots: (UserPlot & {
        plot: Plot;
    })[];
};

export type UsersFromDb = User[];

export type UsersWithPlotsFromDb = UserWithPlotsFromDb[];

// ===  TYPES FOR SELECT USE CASES  ===

// User Profile
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
export type UserProfileFromDb = Prisma.UserGetPayload<typeof userProfileSelect>;

// User Table Rows
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
export type UserTableRowsFromDb = Prisma.UserGetPayload<typeof userTableRowsSelect>[];
