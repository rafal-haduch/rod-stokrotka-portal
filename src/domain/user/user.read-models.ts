import { Role } from '@prisma/client';

/**
 * Read model representing the current user's profile data.
 * Used for displaying personal account information.
 */
export interface UserProfileReadModel {
    name: string;
    login: string;
    role: Role;
    plots: {
        plotId: number;
        plotNumber: string;
    }[];
}

/**
 * Read model representing a single user entry in user listings.
 * Contains only data required for overview and administration purposes.
 */
export interface UserTableRowReadModel {
    id: number;
    name: string;
    role: Role;
    plotNumbers: string[];
    createdAt: Date;
    lastLogin: Date | null;
}

/**
 * Read model used to populate the user edit form.
 * Contains editable fields and related plot references.
 */
export interface UserUpdateFormReadModel {
    id: number;
    name: string;
    role: Role;
    plots: {
        plotId: number;
        plotNumber: string;
    }[];
}

/**
 * Read model used for user deletion confirmation.
 * Intended for display only, without sensitive data.
 */
export interface UserDeleteFormReadModel {
    id: number;
    name: string;
    role: Role;
    plots: {
        plotId: number;
        plotNumber: string;
    }[];
}
