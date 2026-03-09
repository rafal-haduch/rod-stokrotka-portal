import { CreatedUserData, UpdatedUserData } from '@/features/user/domain/user.api-contracts';
import { UserProfileFromDb, UserTableRowsFromDb } from '@/features/user/domain/user.db-types';
import { UserProfile, UserTableRow } from '@/features/user/domain/user.read-models';
import { userRepository } from '@/features/user/domain/user.repository';

// === MAPPERS FOR QUERIES ===

/**
 * Maps a row user entity with plots from database to a user profile read model.
 */
export function mapToUserProfile(user: UserProfileFromDb): UserProfile {
    return {
        name: user.name,
        role: user.role,
        login: user.login,
        plots: user.plots.map((p) => ({
            id: p.plot.id,
            plotNumber: p.plot.plotNumber,
        })),
    };
}

/**
 * Maps a row collection of users with plots from database to dashboard user table rows read model.
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
export function mapToCreateUserData(
    input: Awaited<ReturnType<typeof userRepository.create>>
): CreatedUserData {
    return {
        id: input.id,
        name: input.name,
        plots: input.plots.map((p) => ({ id: p.plot.id, plotNumber: p.plot.plotNumber })),
        role: input.role,
        login: input.login,
        password: input.password, // jeśli potrzebne w akcjach
        createdAt: input.createdAt,
        lastLogin: null,
    };
}

/**
 * Maps raw user entity returned from `update` action to UpdateUserData contract.
 */
export function mapToUpdateUserData(
    input: Awaited<ReturnType<typeof userRepository.update>>
): UpdatedUserData {
    return {
        id: input.id,
        name: input.name,
        plots: input.plots.map((p) => ({ id: p.plot.id, plotNumber: p.plot.plotNumber })),
        role: input.role,
        createdAt: input.createdAt,
        lastLogin: input.lastLogin,
    };
}
