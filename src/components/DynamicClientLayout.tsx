'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Hero from './Hero';
import { slugToTitle } from '@/utils/toTitleCase';

interface RouteTitles {
    pathname: string;
    title: string;
}

export const routeTitles: RouteTitles[] = [
    { pathname: '/', title: 'STRONA GŁÓWNA' },
    { pathname: '/about-us', title: 'O NAS' },
    { pathname: '/garden-map', title: 'MAPA OGRODU' },
    { pathname: '/gallery', title: 'GALERIA' },
    { pathname: '/structure-association', title: 'WŁADZE' },
    { pathname: '/contact', title: 'KONTAKT' },
    { pathname: '/documents', title: 'DOKUMENTY' },
    { pathname: '/fees', title: 'OPŁATY' },
    { pathname: '/information', title: 'INFORMACJE' },
    { pathname: '/announcements', title: 'OGŁOSZENIA' },
    { pathname: '/memories', title: 'WSPOMNIENIA' },
    { pathname: '/investments', title: 'INWESTYCJE' },
    { pathname: '/gardening-guide', title: 'PORADY OGRODOWE' },
    { pathname: '/privacy-policy', title: 'POLITYKA PRYWATNOŚCI' },
] as const;

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        let pageTitle = '';
        const staticRoute = routeTitles.find((route) => route.pathname === pathname);

        //TODO: improve site name in slug pages
        if (staticRoute) {
            pageTitle = staticRoute.title;
        } else if (pathname.startsWith('/memories/')) {
            const slug = pathname.replace('/memories/', '');
            pageTitle = slugToTitle(slug);
        } else if (pathname.startsWith('/investments/')) {
            const slug = pathname.replace('/investments/', '');
            pageTitle = slugToTitle(slug);
        }

        document.title = pageTitle
            ? `ROD Stokrotka Sanok | ${pageTitle.toUpperCase()}`
            : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const hideHeroRoutes = ['/sign-in', '/privacy-policy', '/dashboard'];
    const showHero =
        !hideHeroRoutes.includes(pathname) &&
        !pathname.startsWith('/memories/') &&
        !pathname.startsWith('/investments/');

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
