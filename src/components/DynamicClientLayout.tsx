'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Hero from './Hero';

interface RouteTitles {
    pathname: string;
    title: string;
}

export const routeTitles: RouteTitles[] = [
    { pathname: '/', title: 'STRONA GŁÓWNA' },
    { pathname: '/about-us', title: 'O NAS' },
    { pathname: '/garden-map', title: 'MAPA OGRODU' },
    { pathname: '/structure-association', title: 'WŁADZE' },
    { pathname: '/contact', title: 'KONTAKT' },
    { pathname: '/documents', title: 'DOKUMENTY' },
    { pathname: '/fees', title: 'OPŁATY' },
    { pathname: '/information', title: 'INFORMACJE' },
    { pathname: '/announcements', title: 'OGŁOSZENIA' },
    { pathname: '/investments', title: 'INWESTYCJE' },
    { pathname: '/privacy-policy', title: 'POLITYKA PRYWATNOŚCI' },
    { pathname: '/gallery', title: 'GALERIA' },
    { pathname: '/gallery/community-garden-photos', title: 'ZDJĘCIA Z NASZEGO OGRODU' },
    { pathname: '/community-garden-photos', title: 'ZDJĘCIA Z NASZEGO OGRODU' },
    { pathname: '/gardening-guide', title: 'PORADY OGRODOWE' },
] as const;

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        let pageTitle = '';
        const staticRoute = routeTitles.find((route) => route.pathname === pathname);

        //TODO: site name in slug pages
        if (staticRoute) {
            pageTitle = staticRoute.title;
        } else if (pathname.startsWith('/gallery/memory/')) {
            const id = pathname.replace('/gallery/memory/', '');
            // const memory = memoriesDataById[id];
            // pageTitle = memory ? memory.title : '';
        } else if (pathname.startsWith('/investments/')) {
            const id = pathname.replace('/investments/', '');
            // const investment = investmentsDataById[id];
            // pageTitle = investment ? investment.title : '';
        }

        document.title = pageTitle
            ? `ROD Stokrotka Sanok | ${pageTitle.toUpperCase()}`
            : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const hideHeroRoutes = [
        '/sign-in',
        '/privacy-policy',
        '/dashboard',
        '/gallery/community-garden-photos',
    ];
    const showHero =
        !hideHeroRoutes.includes(pathname) &&
        !pathname.startsWith('/gallery/memory/') &&
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
