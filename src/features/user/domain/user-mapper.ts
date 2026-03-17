import { CreateUserResult, UpdateUserResult } from '@/features/user/domain/user-api-contracts';
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
        plots: input.plots.map((p) => ({
            id: p.plot.id,
            plotNumber: p.plot.plotNumber,
        })),
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
        plots: userRow.plots.map((userPlot) => {
            return { id: userPlot.plot.id, plotNumber: userPlot.plot.plotNumber };
        }),
        createdAt: userRow.createdAt,
        lastLogin: userRow.lastLogin,
    }));
}

// === MAPPERS FOR ACTIONS ===

/**
 * Maps raw user entity returned from `create` action to CreateUserData contract.
 */
export function mapToCreatedUserData(
    input: Awaited<ReturnType<typeof userRepository.create>>,
    password: string
): CreateUserResult {
    return {
        id: input.id,
        name: input.name,
        plots: input.plots.map((p) => ({ id: p.plot.id, plotNumber: p.plot.plotNumber })),
        role: input.role,
        login: input.login,
        password: password,
        createdAt: input.createdAt,
        lastLogin: null,
    };
}

/**
 * Maps raw user entity returned from `update` action to UpdateUserData contract.
 */
export function mapToUpdatedUserData(
    input: Awaited<ReturnType<typeof userRepository.update>>
): UpdateUserResult {
    return {
        id: input.id,
        name: input.name,
        plots: input.plots.map((p) => ({ id: p.plot.id, plotNumber: p.plot.plotNumber })),
        role: input.role,
        createdAt: input.createdAt,
        lastLogin: input.lastLogin,
    };
}
