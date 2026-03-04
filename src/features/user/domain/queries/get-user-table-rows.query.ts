import { unstable_cache } from 'next/cache';

import { mapToUserTableRows } from '@/features/user/domain/user.mapper';
import { UserTableRow } from '@/features/user/domain/user.read-models';
import { userRepository } from '@/features/user/domain/user.repository';

/**
 * Fetches only the fields needed for the dashboard users table from the database.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
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
