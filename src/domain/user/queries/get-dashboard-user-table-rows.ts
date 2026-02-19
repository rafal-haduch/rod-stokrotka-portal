import { UserTableRow } from '../user.read-models';
import { userRepository } from '../user.repository';

/**
 * Fetches from database only the fields needed for UI (dashboard users table)
 */
export async function getDashboardUserTableRows(): Promise<UserTableRow[]> {
    return await userRepository.getUserTableRows();
}
