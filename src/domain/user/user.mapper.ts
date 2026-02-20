import { UsersWithPlotsFromDb, UserWithPlotsFromDb } from './user.db-types';
import {
    UserTableRow,
    UserDeleteFormReadModel,
    UserUpdateFormReadModel,
    UserProfileReadModel,
} from './user.read-models';

/**
 * Maps a user entity with plots from database to a user profile read model.
 */
export function mapUserToUserProfile(user: UserWithPlotsFromDb): UserProfileReadModel {
    return {
        name: user.name,
        role: user.role,
        login: user.login,
        plots: user.plotsId.map((p) => ({
            plotId: p.plotId,
            plotNumber: p.plot.plotNumber,
        })),
    };
}

/**
 * Maps a collection of users with plots from database to dashboard user table rows read model.
 */
export function mapUsersToUserTableRows(users: UsersWithPlotsFromDb): UserTableRow[] {
    return users.map((user) => ({
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plotsId.map((userPlot) => {
            return { id: userPlot.plot.id, plotNumber: userPlot.plot.plotNumber };
        }),
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
    }));
}

/**
 * Maps a user entity with plots from database to a user update form read model.
 */
export function mapUserToUserUpdateForm(user: UserWithPlotsFromDb): UserUpdateFormReadModel {
    return {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plotsId.map((p) => ({
            plotId: p.plotId,
            plotNumber: p.plot.plotNumber,
        })),
    };
}

/**
 * Maps a user entity with plots from database to a user delete form read model.
 */
export function mapUserToUserDeleteForm(user: UserWithPlotsFromDb): UserDeleteFormReadModel {
    return {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plotsId.map((p) => ({
            plotId: p.plotId,
            plotNumber: p.plot.plotNumber,
        })),
    };
}
