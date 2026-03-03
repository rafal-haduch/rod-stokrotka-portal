import { User, UserPlot, Plot, Prisma } from '@prisma/client';

/* ======================== */
/* === BASE TYPES FOR INCLUDE === */
/* ======================== */

export type UserFromDb = User;

export type UserWithPlotsFromDb = User & {
    plotsId: (UserPlot & {
        plot: Plot;
    })[];
};

export type UsersFromDb = User[];

export type UsersWithPlotsFromDb = UserWithPlotsFromDb[];

/* =========================== */
/* ===  TYPES FOR SELECT USE CASES  === */
/* =========================== */

export const userProfileSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: {
        name: true,
        login: true,
        role: true,
        plotsId: {
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

export const userTableRowsSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: {
        id: true,
        name: true,
        role: true,
        createdAt: true,
        lastLogin: true,
        plotsId: {
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
