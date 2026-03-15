import { Role } from '@prisma/client';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { UserProfile, UserTableRow } from '@/features/user/domain/user-read-models';

// === FOR QUERIES ===

/**
 * API contract representing data returned by the get user profile query.
 */
export interface FetchedUserProfile extends UserProfile {}

/**
 * API contract representing data returned by the get user table rows query.
 */
export type FetchedUserTableRows = UserTableRow[];

// === FOR ACTIONS ===

/**
 * API contract representing data returned by the create user action upon successful completion.
 */
export interface CreatedUserData {
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
 * API contract representing data returned by the update user action upon successful completion.
 */
export interface UpdatedUserData {
    id: number;
    name: string;
    plots: PlotMinimalReference[];
    role: Role;
    createdAt: Date;
    lastLogin: Date | null;
}
