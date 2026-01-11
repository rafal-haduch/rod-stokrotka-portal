'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { AppRoute, ROUTE_LIST } from '@/constants/routes';

import { slugToTitle } from '@/utils/to-title-case';

import Hero from './hero';

const routes = ROUTE_LIST as AppRoute[];

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        let pageTitle = '';
        const staticRoute = routes.find((r) => r.path === pathname);

        //TODO: improve site name in slug pages
        if (staticRoute) {
            pageTitle = staticRoute.title;
        } else if (pathname.startsWith('/memories/')) {
            const slug = pathname.replace('/memories/', '');
            pageTitle = slugToTitle(slug);
        } else if (pathname.startsWith('/investments/')) {
            const slug = pathname.replace('/investments/', '');
            pageTitle = slugToTitle(slug);
        } else if (pathname.startsWith('/announcements/')) {
            const slug = pathname.replace('/announcements/', '');
            pageTitle = slugToTitle(slug);
        }

        document.title = pageTitle
            ? `ROD Stokrotka Sanok | ${pageTitle.toUpperCase()}`
            : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const route = routes.find((r) => r.path === pathname);
    const showHero =
        route?.hero ??
        (!pathname.startsWith('/memories/') &&
            !pathname.startsWith('/investments/') &&
            !pathname.startsWith('/dashboard'));

    return (
        <>
            {showHero && (
                <header>
                    <Hero />
                </header>
            )}
            {children}
        </>
    );
}
