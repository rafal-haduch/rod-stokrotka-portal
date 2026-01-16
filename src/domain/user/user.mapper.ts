import { UsersWithPlotsFromDb, UserWithPlotsFromDb } from './user-from-db.types';
import {
    UserTableRowReadModel,
    UserDeleteFormReadModel,
    UseUpdateFormReadModel,
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
export function mapUsersToUserTableRows(users: UsersWithPlotsFromDb): UserTableRowReadModel[] {
    return users.map((user) => ({
        id: user.id,
        name: user.name,
        role: user.role,
        plotNumbers: user.plotsId.map((userPlot) => userPlot.plot.plotNumber),
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
    }));
}

/**
 * Maps a user entity with plots from database to an edit user form read model.
 */
export function mapUserToUserUpdateForm(user: UserWithPlotsFromDb): UseUpdateFormReadModel {
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
 * Maps a user entity with plots from database to an delete user form read model.
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
