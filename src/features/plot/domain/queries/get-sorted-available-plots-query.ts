import { unstable_cache } from 'next/cache';
import { PlotMinimalReference } from '../plot-read-models';
import { plotRepository } from '../plot-repository';

/**
 * Fetches sorted only the fields needed for the multi-select dropdown inputs from the database.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
 *
 * Use `revalidateTag('plots')` after any server-side mutations to immediately refresh cached data.
 */
export const getSortedAvailablePlots: () => Promise<PlotMinimalReference[]> = unstable_cache(
    async () => {
        return await plotRepository.getPlotOptions();
    },
    ['available-plots'],
    {
        revalidate: 60 * 60 * 24 * 30, // 30 days
        tags: ['plots'],
    }
);
