'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/cn';
import { PUBLIC_NAV_ITEMS, ROUTES } from '@/config/routes';

import SeasonalThemesToggle from '@/features/theme/ui/seasonal-themes-toggle';
import SignInOrMyAccountLink from '@/features/auth/ui/sign-in-or-my-account-link';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Closed mobile menu at lg break point.
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setIsOpen(false);
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Block scroll when mobile menu is open.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup in case of component unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header aria-label="Główny baner strony" className="sticky top-0 z-50">
            {/* --- Wrapper For Top Bar  --- */}
            <div className="from-navbar-gradient-from to-navbar-gradient-to border-navbar-border text-content-on-navbar relative flex h-22 items-center justify-between border-b-4 bg-linear-to-b p-2 shadow-lg">
                {/* --- Logo --- */}
                <Link href={ROUTES.HOME.path} className="z-50 h-22 w-auto sm:shrink-0">
                    <Image
                        src="/assets/logo.svg"
                        alt="Logo Ogordu Stokrotka Sanok."
                        width={200}
                        height={22}
                        priority
                        className="h-full"
                    />
                </Link>
                {/* --- Desktop Nav --- */}
                <nav aria-label="Główna nawigacja strony" className="hidden max-w-5xl xl:flex">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-serif text-lg font-semibold uppercase">
                        {PUBLIC_NAV_ITEMS.map((item) => (
                            <li
                                key={item.path}
                                className={cn(
                                    'hover:text-content-on-navbar-hover cursor-pointer transition hover:underline',
                                    pathname === item.path
                                        ? 'text-content-on-navbar-hover underline'
                                        : ''
                                )}
                            >
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* --- Desktop Nav Options --- */}
                <div className="hidden gap-4 xl:flex">
                    <SeasonalThemesToggle />
                    <SignInOrMyAccountLink />
                </div>
                {/* --- Hambuerger Button --- */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Przycisk do rozwijania mobilnego menu"
                    className="z-50 flex flex-col items-center justify-center hover:cursor-pointer xl:hidden"
                >
                    <div className="relative flex h-8 w-8 flex-col items-center justify-center">
                        <span
                            className={cn(
                                'absolute h-1 w-8 bg-white transition-transform duration-300 ease-in-out',
                                isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                            )}
                        />
                        <span
                            className={cn(
                                'absolute h-1 w-8 bg-white transition-opacity duration-200 ease-in-out',
                                isOpen ? 'opacity-0' : 'opacity-100'
                            )}
                        />
                        <span
                            className={cn(
                                'absolute h-1 w-8 bg-white transition-transform duration-300 ease-in-out',
                                isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                            )}
                        />
                    </div>
                </button>
            </div>
            {/* --- Mobile Menu --- */}
            {isOpen && (
                <nav
                    aria-label="Główna nawigacja strony"
                    className="from-navbar-gradient-from to-navbar-gradient-to fixed inset-0 top-22 z-40 overflow-x-auto overflow-y-auto border-b-4 bg-linear-to-br pt-8 pb-10 text-center font-serif text-lg font-bold transition-transform duration-500"
                >
                    <ul className="mx-auto mb-4 space-y-4 whitespace-nowrap">
                        {PUBLIC_NAV_ITEMS.map((item, i) => (
                            <li
                                key={item.path}
                                className={cn(
                                    'text-content-on-navbar cursor-pointer transition hover:underline',
                                    pathname === item.path ? 'underline' : ''
                                )}
                            >
                                <Link href={item.path} onClick={() => setIsOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mx-auto flex max-w-md items-center justify-between px-4">
                        <SeasonalThemesToggle />
                        <SignInOrMyAccountLink onClick={() => setIsOpen(false)} />
                    </div>
                </nav>
            )}
        </header>
    );
}
