import { UserRole } from '@prisma/client';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { UserProfile, UserTableRow } from '@/features/user/domain/user-read-models';

// === FOR QUERIES ===

/**
 * API contract representing data returned by the get user profile query.
 */
export interface GetUserProfileResponse extends UserProfile {}

/**
 * API contract representing data returned by the get user table rows query.
 */
export type GetUserTableRowsResponse = UserTableRow[];

// === FOR ACTIONS ===

/**
 * API contract representing data returned by the create user action upon successful completion.
 */
export interface CreateUserData {
    id: number;
    name: string;
    plots: PlotMinimalReference[];
    role: UserRole;
    login: string;
    password: string;
    createdAt: Date;
    lastLogin: null;
}

/**
 * API contract representing data returned by the update user action upon successful completion.
 */
export interface UpdateUserData {
    id: number;
    name: string;
    plots: PlotMinimalReference[];
    role: UserRole;
    createdAt: Date;
    lastLogin: Date | null;
}

/**
 * API contract representing data returned by the delete user action upon successful completion.
 */
export interface DeleteUserData {
    id: number;
}
