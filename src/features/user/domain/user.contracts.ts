import { Role } from '@prisma/client';

import { PlotMinimalReference } from '@/features/plot/plot.read-models';

/**
 * Data returned by the create user action if it completes successfully.
 */
export interface CreateUserData {
    id: number;
    name: string;
    plots: PlotMinimalReference[];
    role: Role;
    login: string;
    password: string;
    createdAt: Date;
    lastLogin: null;
}

/**
 * Data returned by the update user action if it completes successfully.
 */
export interface UpdateUserData {
    id: number;
    name: string;
    plots: PlotMinimalReference[];
    role: Role;
    createdAt: Date;
    lastLogin: Date | null;
}
