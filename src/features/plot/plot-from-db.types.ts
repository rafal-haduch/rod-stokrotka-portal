import { User, UserPlot, Plot } from '@prisma/client';

export type PlotFromDb = Plot;

export type PlotWithOwnersFromDb = Plot & {
    ownersId: (UserPlot & {
        user: User;
    })[];
};

export type PlotsFromDb = Plot[];

export type PlotsWithOwnersFromDb = PlotWithOwnersFromDb[];
