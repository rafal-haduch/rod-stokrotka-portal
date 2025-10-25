'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navLinks } from '@/data/navLinks';
import Hero from './Hero';

export default function DynamicClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const current = navLinks.find((link) => link.href === pathname);
        const pageTitle = current ? current.name : '';

        document.title = pageTitle ? `ROD Stokrotka Sanok | ${pageTitle}` : 'ROD Stokrotka Sanok';
    }, [pathname]);

    const showHero = !['/sign-in', '/dashboard'].includes(pathname);

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
