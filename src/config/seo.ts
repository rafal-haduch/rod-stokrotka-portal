import { PageKey, ROUTES } from '@/config/routes';
import { SITE_NAME } from '@/data/site-and-company';
import { Metadata } from 'next';

export const SEO = {
    HOME: {
        title: {
            absolute: SITE_NAME,
        },
        description: '...',
        alternates: {
            canonical: ROUTES.HOME.path,
        },
        openGraph: {
            title: SITE_NAME,
            description: '...',
            url: ROUTES.HOME.path,
        },
    },
} satisfies Record<PageKey, Metadata>;
