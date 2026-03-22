import { UserRole } from '@prisma/client';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

/**
 * Read model representing the current user's profile data.
 * Used for displaying personal account information.
 */
export interface UserProfile {
    name: string;
    login: string;
    role: UserRole;
}

/**
 * Represents a single user entry and contains only the fields required for overview and administration.
 */
export interface UserTableRow {
    id: number;
    name: string;
    role: UserRole;
    createdAt: Date;
    lastLogin: Date | null;
    ownedPlots: PlotMinimalReference[];
    coOwnedPlots: PlotMinimalReference[];
    usedPlots: PlotMinimalReference[];
}
