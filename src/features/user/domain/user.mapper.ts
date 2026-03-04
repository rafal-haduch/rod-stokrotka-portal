import { UserProfileFromDb, UserTableRowsFromDb } from '@/features/user/domain/user.db-types';
import { UserProfile, UserTableRow } from '@/features/user/domain/user.read-models';

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
