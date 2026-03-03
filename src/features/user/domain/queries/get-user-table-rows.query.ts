import { unstable_cache } from 'next/cache';
import { UserTableRow } from '../user.read-models';
import { userRepository } from '../user.repository';
import { mapToUserTableRows } from '../user.mapper';

/**
 * Fetches only the fields needed for the dashboard users table from the database.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
 *
 * Use `revalidateTag('users')` after any server-side mutations to immediately refresh cached data.
 */
export const getUserTableRows: () => Promise<UserTableRow[]> = unstable_cache(
    async () => {
        const result = await userRepository.getUserTableRows();
        return mapToUserTableRows(result);
    },
    ['user-table-rows'],
    {
        revalidate: 60 * 30 * 24 * 30, // 30 days
        tags: ['users'],
    }
);
