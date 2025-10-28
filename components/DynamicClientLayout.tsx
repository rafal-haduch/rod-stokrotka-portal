'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navLinks } from '@/data/navLinks';
import Hero from './Hero';
import { memoriesData } from '@/data';

type RouteTitles = {
    pathname: string;
    title: string;
};

export const routeTitles: RouteTitles[] = [
    { pathname: '/', title: 'STRONA GŁÓWNA' },
    { pathname: '/about-us', title: 'O NAS' },
    { pathname: '/garden-map', title: 'MAPA OGRODU' },
    { pathname: '/management', title: '/ZARZĄD' },
    { pathname: '/contact', title: 'KONTAKT' },
    { pathname: '/documents', title: 'DOKUMENTY' },
    { pathname: '/fees', title: 'OPŁATY' },
    { pathname: '/information', title: 'INFORMACJE' },
    { pathname: '/announcements', title: 'OGŁOSZENIA' },
    { pathname: '/investments', title: 'INWESTYCJE' },
    { pathname: '/gallery', title: 'GALERIA' },
    { pathname: '/gardening-guide', title: 'PORADY OGRODOWE' },
];

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        let pageTitle = '';

        // statyczne trasy
        const staticRoute = routeTitles.find((route) => route.pathname === pathname);
        if (staticRoute) {
            pageTitle = staticRoute.title;
        }

        // dynamiczne slug'i dla galerii
        else if (pathname.startsWith('/gallery/memories/')) {
            const slug = pathname.replace('/gallery/memories/', '');
            const memory = memoriesData[slug];
            pageTitle = memory ? memory.title : '';
        }

        document.title = pageTitle ? `ROD Stokrotka Sanok | ${pageTitle}` : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const hideHeroRoutes = ['/sign-in', '/dashboard', '/gallery/community-garden-photos'];
    const showHero =
        !hideHeroRoutes.includes(pathname) && !pathname.startsWith('/gallery/memories/');

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
