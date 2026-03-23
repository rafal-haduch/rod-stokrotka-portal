import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';
import { User, UserPlot, Plot, Prisma, PlotRole } from '@prisma/client';

// === TYPES WITH RELATIONS (INCLUDE) ===

export type PlotFromDb = Plot;

export type PlotMembershipFromDb = {
    role: PlotRole;
    user: {
        id: number;
        name: string;
    };
};

export type PlotWithMembersFromDb = Plot & {
    members: PlotMembershipFromDb[];
};

/**
 * Represents a single plot assignment to a user from the database.
 */
export type AssignmentPlotToUser = {
    role: PlotRole;
    plot: PlotMinimalReference;
};

export type PlotsFromDb = PlotFromDb[];

export type PlotsWithMembersFromDb = PlotWithMembersFromDb[];

// ===  SELECTED FIELDS TYPES (SELECT)  ===

/**
 * Selection for retrieving plot table rows for admin views or lists.
 */
export const plotTableRowsSelect = Prisma.validator<Prisma.PlotDefaultArgs>()({
    select: {
        id: true,
        number: true,
        area: true,
        owner: {
            select: {
                name: true,
            },
        },
    },
});

/**
 * Type representing the result of `plotTableRowsSelect`.
 */
export type PlotTableRowsFromDb = Prisma.PlotGetPayload<typeof plotTableRowsSelect>[];
