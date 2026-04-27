'use server';

import { unstable_cache } from 'next/cache';

import { GetAvailablePlotsResponse } from '@/features/plot/domain/plot-api-contracts';
import { plotRepository } from '@/features/plot/domain/plot-repository';

/**
 * Fetches plot options for UI select inputs and transforms them into a simplified structure.
 *
 * Returns both:
 * - all plots (as minimal references)
 * - plots without an assigned owner
 *
 * Database-specific fields (e.g. ownerId) are not exposed to the client.
 *
 * This function is cached on the server using Next.js App Router `unstable_cache`.
 *
 * Use `revalidateTag('plots')` after any server-side mutations to immediately refresh cached data.
 */
export const getSortedAvailablePlots: () => Promise<GetAvailablePlotsResponse> = unstable_cache(
    async () => {
        const result = await plotRepository.getAvailablePlotsMinimalReference();

        return {
            plotOptions: result.map((p) => ({
                id: p.id,
                number: p.number,
            })),
        };
    },
    ['available-plots'],
    {
        revalidate: 60 * 60 * 24 * 30, // 30 days
        tags: ['plots'],
    }
);
