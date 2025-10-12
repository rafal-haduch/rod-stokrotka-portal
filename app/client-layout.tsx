'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navLinks } from '@/data/navLinks'; // ścieżka dostosowana do twojego projektu

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const current = navLinks.find((link) => link.href === pathname);
        const pageTitle = current ? current.name : '';

        document.title = pageTitle ? `ROD Stokrotka Sanok | ${pageTitle}` : 'ROD Stokrotka Sanok';
    }, [pathname]);

    return <>{children}</>;
}
