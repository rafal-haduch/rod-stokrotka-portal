import { PlotRole } from '@prisma/client';

import { CreateUserData, UpdateUserData } from '@/features/user/domain/user-api-contracts';
import { UserProfileFromDb, UserTableRowsFromDb } from '@/features/user/domain/user-db-types';
import { UserProfile, UserTableRow } from '@/features/user/domain/user-read-models';
import { userRepository } from '@/features/user/domain/user-repository';
import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';
import { PlotsAssignedToUser } from '@/features/user/domain/user-types';
import { AssignmentPlotToUser } from '@/features/plot/domain/plot-db-types';

/**
 * Helper mapper maps raw plot relations from the database into a structured UserPlotAssignment.
 *
 * Combines owned plots and plot memberships, and splits them into
 * owned, co-owned, and used plot collections based on their roles.
 */
export function mapUserPlotsAssignment(
    ownedPlotsDb: PlotMinimalReference[],
    plotMembershipsDb: AssignmentPlotToUser[]
): PlotsAssignedToUser {
    return {
        ownedPlots: ownedPlotsDb.map((p) => ({ id: p.id, number: p.number })),
        coOwnedPlots: plotMembershipsDb
            .filter((m) => m.role === PlotRole.CO_OWNER)
            .map((m) => ({ id: m.plot.id, number: m.plot.number })),
        usedPlots: plotMembershipsDb
            .filter((m) => m.role === PlotRole.USER)
            .map((m) => ({ id: m.plot.id, number: m.plot.number })),
    };
}

/**
 * Maps a row user entity with plots from database to a user profile read model.
 */
export function mapToUserProfile(input: UserProfileFromDb): UserProfile {
    return {
        id: input.id,
        name: input.name,
        role: input.role,
        login: input.login,
        createdAt: input.createdAt,
    };
}

/**
 * Maps a row collection of users with plots from database to CMS user table rows read model.
 */
export function mapToUserTableRows(input: UserTableRowsFromDb): UserTableRow[] {
    return input.map((userRow) => ({
        id: userRow.id,
        name: userRow.name,
        role: userRow.role,
        createdAt: userRow.createdAt,
        lastLogin: userRow.lastLogin,
        plots: userRow.ownedPlots.length + userRow.plotMemberships.length,
        ...mapUserPlotsAssignment(userRow.ownedPlots, userRow.plotMemberships),
    }));
}

/**
 * Maps raw user entity returned from `create` action to CreateUserData contract.
 */
export function mapToCreatedUserData(
    input: Awaited<ReturnType<typeof userRepository.create>>,
    password: string
): CreateUserData {
    return {
        id: input.id,
        name: input.name,
        role: input.role,
        login: input.login,
        password: password,
        createdAt: input.createdAt,
        lastLogin: null,
        ...mapUserPlotsAssignment(input.ownedPlots, input.plotMemberships),
    };
}

/**
 * Maps raw user entity returned from `update` action to UpdateUserData contract.
 */
export function mapToUpdatedUserData(
    input: Awaited<ReturnType<typeof userRepository.update>>
): UpdateUserData {
    return {
        id: input.id,
        name: input.name,
        role: input.role,
        createdAt: input.createdAt,
        lastLogin: input.lastLogin,
        ...mapUserPlotsAssignment(input.ownedPlots, input.plotMemberships),
    };
}
