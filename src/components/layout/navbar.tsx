'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogIn, User } from 'lucide-react';

import { cn } from '@/shared/utils/cn';
import { PUBLIC_NAV_ITEMS, ROUTES } from '@/config/routes';

export default function Navbar() {
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Closed mobile menu at lg break point
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

    // Block scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // REVIEW: why?
        // Cleanup in case of component unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            aria-label="Główny baner strony"
            className="font-merriweather from-navbar-gradient-from to-navbar-gradient-to border-navbar-border text-content-on-navbar sticky top-0 z-50 flex h-22 items-center justify-between border-b-4 bg-linear-to-b p-2 text-lg font-bold uppercase shadow-lg"
        >
            {/* Logo - always visible */}
            <Link href="/" className="z-50 h-22 w-auto sm:shrink-0">
                <Image
                    src="/assets/logo.svg"
                    alt="Logo Ogordu Stokrotka Sanok."
                    width={200}
                    height={22}
                    priority
                    className="h-full"
                />
            </Link>

            {/* ============ Desktop Menu ============ */}
            <nav aria-label="Główna nawigacja strony" className="hidden xl:flex">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
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

            {/* Sign In / My Profile */}
            {isLoggedIn ? (
                <Link
                    href={ROUTES.MY_ACCOUNT.path}
                    className="hidden cursor-pointer flex-col items-center text-white hover:underline xl:flex"
                >
                    <User size={42} />
                    <p className="text-lg font-bold whitespace-nowrap">{ROUTES.MY_ACCOUNT.label}</p>
                </Link>
            ) : (
                <Link
                    href={ROUTES.LOGIN.path}
                    className="hidden cursor-pointer flex-col items-center text-white hover:underline xl:flex"
                >
                    <LogIn size={42} />
                    <p className="text-xl font-bold">{ROUTES.LOGIN.label}</p>
                </Link>
            )}

            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Przycisk do rozwijania mobilnego menu"
                className={cn(
                    'z-50 flex flex-col items-center justify-center hover:cursor-pointer xl:hidden'
                )}
            >
                <div className="relative flex h-8 w-8 flex-col items-center justify-center">
                    <span
                        className={cn(
                            'bg-theme-on-ui-bar absolute h-1 w-8 transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-on-ui-bar',
                            'transition-opacity duration-200 ease-in-out',
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-on-ui-bar',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                        )}
                    />
                </div>
                <p className="text-theme-on-ui-bar font-bold">{isOpen ? 'Zamknij' : 'Menu'}</p>
            </button>

            {/* ============ Mobile Menu ============ */}
            {isOpen && (
                <>
                    <nav
                        aria-label="Główna nawigacja strony"
                        className="font-nav from-theme-ui-bar-dark via-theme-ui-bar-light to-theme-ui-bar-dark border-theme-ui-bar-border text-theme-on-ui-bar fixed inset-0 z-40 border-b-4 bg-linear-to-r pt-24 text-center text-lg font-bold transition-transform duration-500"
                    >
                        <ul className="mx-auto h-full space-y-4 overflow-x-auto overflow-y-auto pb-8 whitespace-nowrap">
                            {PUBLIC_NAV_ITEMS.map((item, i) => (
                                <li
                                    key={item.path}
                                    className={cn(
                                        'text-theme-on-ui-bar hover:text-theme-on-ui-bar-hover cursor-pointer transition hover:underline',
                                        pathname === item.path ? 'underline' : ''
                                    )}
                                >
                                    <Link href={item.path} onClick={() => setIsOpen(false)}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Sign In / My Profile */}
                            <li>
                                {isLoggedIn ? (
                                    <Link
                                        href={ROUTES.MY_ACCOUNT.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'flex items-center justify-center space-x-2',
                                            'text-white',
                                            'transition-opacity duration-300 hover:underline'
                                        )}
                                    >
                                        <User size={42} />
                                        <span className="text-xl font-bold">
                                            {ROUTES.MY_ACCOUNT.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <Link
                                        href={ROUTES.LOGIN.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'flex items-center justify-center space-x-2',
                                            'text-white',
                                            'transition-opacity duration-300 hover:underline'
                                        )}
                                    >
                                        <LogIn size={42} />
                                        <span className="text-xl font-bold">
                                            {ROUTES.LOGIN.label}
                                        </span>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
}
