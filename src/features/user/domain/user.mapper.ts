import { UserProfileFromDb, UserTableRowsFromDb } from './user.db-types';
import { UserTableRow, UserProfile } from './user.read-models';

/**
 * Maps a row user entity with plots from database to a user profile read model.
 */
export function mapToUserProfile(user: UserProfileFromDb): UserProfile {
    return {
        name: user.name,
        role: user.role,
        login: user.login,
        plots: user.plotsId.map((p) => ({
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
        plots: userRow.plotsId.map((userPlot) => {
            return { id: userPlot.plot.id, plotNumber: userPlot.plot.plotNumber };
        }),
        createdAt: userRow.createdAt,
        lastLogin: userRow.lastLogin,
    }));
}
