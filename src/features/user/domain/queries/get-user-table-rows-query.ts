import { unstable_cache } from 'next/cache';

import { FetchedUserTableRows } from '@/features/user/domain/user-api-contracts';
import { mapToUserTableRows } from '@/features/user/domain/user-mapper';
import { userRepository } from '@/features/user/domain/user-repository';

/**
 * Fetches only the fields needed for the CMS users table from the database.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
 * Use `revalidateTag('users')` after any server-side mutations to immediately refresh cached data.
 */
export const getUserTableRows: () => Promise<FetchedUserTableRows> = unstable_cache(
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
