import { PlotRole } from '@prisma/client';

import { CreateUserData, UpdateUserData } from '@/features/user/domain/user-api-contracts';
import { UserProfileFromDb, UserTableRowsFromDb } from '@/features/user/domain/user-db-types';
import { UserProfile, UserTableRow } from '@/features/user/domain/user-read-models';
import { userRepository } from '@/features/user/domain/user-repository';

// === MAPPERS FOR QUERIES ===

/**
 * Maps a row user entity with plots from database to a user profile read model.
 */
export function mapToUserProfile(input: UserProfileFromDb): UserProfile {
    return {
        name: input.name,
        role: input.role,
        login: input.login,
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
        ownedPlots: userRow.ownedPlots.map((p) => ({ id: p.id, plotNumber: p.number })),
        coOwnedPlots: userRow.plotMemberships
            .filter((m) => m.role === PlotRole.CO_OWNER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
        usedPlots: userRow.plotMemberships
            .filter((m) => m.role === PlotRole.USER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
    }));
}

// === MAPPERS FOR ACTIONS ===

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
        ownedPlots: input.ownedPlots.map((p) => ({ id: p.id, plotNumber: p.number })),
        coOwnedPlots: input.plotMemberships
            .filter((m) => m.role === PlotRole.CO_OWNER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
        usedPlots: input.plotMemberships
            .filter((m) => m.role === PlotRole.USER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
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
        ownedPlots: input.ownedPlots.map((p) => ({ id: p.id, plotNumber: p.number })),
        coOwnedPlots: input.plotMemberships
            .filter((m) => m.role === PlotRole.CO_OWNER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
        usedPlots: input.plotMemberships
            .filter((m) => m.role === PlotRole.USER)
            .map((p) => ({ id: p.plot.id, plotNumber: p.plot.number })),
    };
}
