import { UserBase, PlotsAssignedToUser } from '@/features/user/domain/user-types';

/**
 * Read model representing the current user's profile data.
 * Used for displaying personal account information.
 */
export interface UserProfile extends UserBase {
    login: string;
    createdAt: Date;
}

/**
 * Represents a single user entry and contains only the fields required for overview and administration.
 */
export interface UserTableRow extends UserBase, PlotsAssignedToUser {
    plots: number;
    createdAt: Date;
    lastLogin: Date | null;
}
