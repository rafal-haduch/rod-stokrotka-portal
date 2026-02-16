import type { Metadata } from 'next';
import type { AppRouteBase } from '@/constants/routes';

export function buildMetadata(route: AppRouteBase): Metadata {
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
