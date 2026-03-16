import { FetchedPlotTableRows } from '@/features/plot/domain/plot-api-contracts';
import { mapToPlotTableRows } from '@/features/plot/domain/plot-mapper';
import { plotRepository } from '@/features/plot/domain/plot-repository';
import { unstable_cache } from 'next/cache';

/**
 * Fetches only the fields needed for the CMS plots table from the database.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
 * Use `revalidateTag('plots')` after any server-side mutations to immediately refresh cached data.
 */
export const getPlotTableRows: () => Promise<FetchedPlotTableRows> = unstable_cache(
    async () => {
        const result = await plotRepository.getUserTableRows();
        return mapToPlotTableRows(result);
    },
    ['plot-table-rows'],
    {
        revalidate: 60 * 30 * 24 * 30, // 30 days
        tags: ['plots'],
    }
);
