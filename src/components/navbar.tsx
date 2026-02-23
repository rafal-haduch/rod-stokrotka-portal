'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogIn, User } from 'lucide-react';

import { AppRouteBase, ROUTE_LIST, ROUTES } from '@/config/routes';

import { cn } from '@/utils/cn';

const routes = ROUTE_LIST as AppRouteBase[];
const navItems = routes
    .filter((r) => r.mainNav)
    .sort((a, b) => a.mainNav!.order - b.mainNav!.order);

export function Navbar() {
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
            className={cn(
                'sticky top-0 z-50 h-22',
                'flex items-center justify-between p-2',
                'bg-theme-linear-b',
                'border-theme-navbar-and-footer-border border-b-4',
                'font-nav text-theme-foreground-primary'
            )}
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
            <nav
                aria-label="Główna nawigacja strony"
                className="font-nav hidden text-lg font-bold xl:flex"
            >
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={cn(
                                'text-theme-ui-foreground-primary hover:text-theme-ui-foreground-secondary cursor-pointer transition hover:underline',
                                pathname === item.path
                                    ? 'text-theme-ui-foreground-secondary underline'
                                    : ''
                            )}
                        >
                            <Link href={item.path}>{item.mainNav?.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Sign In / My Profile */}
            {isLoggedIn ? (
                <Link
                    href={ROUTES.MY_PROFILE.path}
                    className="hidden cursor-pointer flex-col items-center text-white hover:underline xl:flex"
                >
                    <User size={42} />
                    <p className="text-lg font-bold whitespace-nowrap">MÓJ PROFIL</p>
                </Link>
            ) : (
                <Link
                    href={ROUTES.LOGIN.path}
                    className="hidden cursor-pointer flex-col items-center text-white hover:underline xl:flex"
                >
                    <LogIn size={42} />
                    <p className="text-xl font-bold">LOGOWANIE</p>
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
                            'bg-theme-ui-background-extra-dark absolute h-1 w-8 transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-ui-background-extra-dark',
                            'transition-opacity duration-200 ease-in-out',
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-ui-background-extra-dark',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                        )}
                    />
                </div>
                <p className="text-theme-ui-foreground-primary font-bold">
                    {isOpen ? 'Zamknij' : 'Menu'}
                </p>
            </button>

            {/* ============ Mobile Menu ============ */}
            {isOpen && (
                <>
                    <nav
                        aria-label="Główna nawigacja strony"
                        className={cn(
                            'fixed inset-0 z-40',
                            'pt-24',
                            'font-nav text-center text-lg font-bold',
                            'bg-theme-linear-lcr',
                            'transition-transform duration-500'
                        )}
                    >
                        <ul className="mx-auto h-full space-y-4 overflow-x-auto overflow-y-auto pb-8 whitespace-nowrap">
                            {navItems.map((item, i) => (
                                <li
                                    key={item.path}
                                    className={cn(
                                        'text-theme-ui-foreground-primary hover:text-theme-ui-foreground-secondary cursor-pointer transition hover:underline',
                                        pathname === item.path ? 'underline' : ''
                                    )}
                                >
                                    <Link href={item.path} onClick={() => setIsOpen(false)}>
                                        {item.mainNav?.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Sign In / My Profile */}
                            <li>
                                {isLoggedIn ? (
                                    <Link
                                        href={ROUTES.MY_PROFILE.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'flex items-center justify-center space-x-2',
                                            'text-white',
                                            'transition-opacity duration-300 hover:underline'
                                        )}
                                    >
                                        <User size={42} />
                                        <span className="text-xl font-bold">MÓJ PROFIL</span>
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
                                        <span className="text-xl font-bold">LOGOWANIE</span>
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
