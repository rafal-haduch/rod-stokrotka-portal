import type { Metadata } from 'next';
import type { AppRoute } from '@/constants/routes';

export function buildMetadata(route: AppRoute): Metadata {
    return {
        title: route.meta?.title,
        description: route.meta?.description,
        robots: route.meta?.noIndex ? 'noindex, nofollow' : 'index, follow',
        openGraph: {
            title: route.meta?.title,
            description: route.meta?.description,
        },
    };
}
