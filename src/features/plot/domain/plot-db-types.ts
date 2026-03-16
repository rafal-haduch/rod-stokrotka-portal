import { User, UserPlot, Plot, Prisma } from '@prisma/client';

// === TYPES WITH RELATIONS (INCLUDE) ===

export type PlotFromDb = Plot;

export type PlotWithOwnersFromDb = Plot & {
    ownersId: (UserPlot & {
        user: User;
    })[];
};

export type PlotsFromDb = Plot[];

export type PlotsWithOwnersFromDb = PlotWithOwnersFromDb[];

// ===  SELECTED FIELDS TYPES (SELECT)  ===

/**
 * Selection for retrieving plot table rows for admin views or lists.
 */
export const plotTableRowsSelect = Prisma.validator<Prisma.PlotDefaultArgs>()({
    select: {
        id: true,
        plotNumber: true,
        area: true,
        ownersId: {
            select: {
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        },
    },
});

/**
 * Type representing the result of `plotTableRowsSelect`.
 */
export type PlotTableRowsFromDb = Prisma.PlotGetPayload<typeof plotTableRowsSelect>[];
