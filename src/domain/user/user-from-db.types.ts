import { User, UserPlot, Plot } from '@prisma/client';

export type UserFromDb = User;

export type UserWithPlotsFromDb = User & {
    plotsId: (UserPlot & {
        plot: Plot;
    })[];
};

export type UsersFromDb = User[];

export type UsersWithPlotsFromDb = UserWithPlotsFromDb[];
