'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Hero from './Hero';
import { memoriesData } from '@/data/memoriesData';

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
    { pathname: '/gallery/community-garden-photos', title: 'ZDJĘCIA Z NASZEGO OGRODU' },
    { pathname: '/community-garden-photos', title: 'ZDJĘCIA Z NASZEGO OGRODU' },
    { pathname: '/gardening-guide', title: 'PORADY OGRODOWE' },
];

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        let pageTitle = '';

        // Static routes
        const staticRoute = routeTitles.find((route) => route.pathname === pathname);
        if (staticRoute) {
            pageTitle = staticRoute.title;
        }
        // Dynamic slugs for the gallery
        else if (pathname.startsWith('/gallery/memory/')) {
            const id = pathname.replace('/gallery/memory/', '');
            const memory = memoriesData[id];
            pageTitle = memory ? memory.title : '';
        }
        // Add here another dynamic slugs for the pages... [ else if(pathname.startsWith('/...')) ]

        // Set page title
        document.title = pageTitle
            ? `ROD Stokrotka Sanok | ${pageTitle.toUpperCase()}`
            : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const hideHeroRoutes = ['/sign-in', '/dashboard', '/gallery/community-garden-photos'];
    const showHero =
        !hideHeroRoutes.includes(pathname) &&
        !pathname.startsWith('/gallery/memory/') &&
        !pathname.startsWith('/investment/');

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
