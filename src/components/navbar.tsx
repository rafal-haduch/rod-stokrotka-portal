'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogIn, User } from 'lucide-react';

import { AppRoute, ROUTE_LIST, ROUTES } from '@/constants/routes';

import { cn } from '@/utils/cn';

const routes = ROUTE_LIST as AppRoute[];
const navItems = routes
    .filter((r) => r.mainNav)
    .sort((a, b) => a.mainNav!.order - b.mainNav!.order);

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

        // REVIEW: po co?
        // Cleanup in case of component unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 h-22',
                'flex items-center justify-between',
                'p-2',
                'font-nav',
                'from-theme-ui-bg-medium to-theme-ui-bg-dark bg-linear-to-b',
                'border-theme-ui-border-dark border-b-4'
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
            <nav>
                <ul
                    className={cn(
                        'hidden flex-wrap justify-center gap-x-6 gap-y-3 xl:flex',
                        'font-nav text-lg font-bold',
                        'text-theme-txt'
                    )}
                >
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={cn(
                                'hover:text-theme-txt-h',
                                'cursor-pointer',
                                pathname === item.path ? 'text-theme-txt-h underline' : ''
                            )}
                        >
                            <Link href={item.path}>{item.mainNav?.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Sign-in/Sign-out */}
            {isLoggedIn ? (
                <Link
                    href={ROUTES.MY_PROFILE.path}
                    className={cn(
                        'hidden flex-col items-center xl:flex',
                        'text-white',
                        'cursor-pointer hover:underline'
                    )}
                >
                    <User size={42} />
                    <span className="text-lg font-bold whitespace-nowrap">MÓJ PROFIL</span>
                </Link>
            ) : (
                <Link
                    href={ROUTES.SIGN_IN.path}
                    className={cn(
                        'hidden flex-col items-center xl:flex',
                        'text-white',
                        'cursor-pointer hover:underline'
                    )}
                >
                    <LogIn size={42} />
                    <span className="text-xl font-bold">LOGOWANIE</span>
                </Link>
            )}

            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'text-theme-txt',
                    'z-50 flex flex-col items-center justify-center hover:cursor-pointer xl:hidden'
                )}
                aria-label="Przycisk do rozwijania mobilnego menu"
            >
                <div className="relative flex h-8 w-8 flex-col items-center justify-center">
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-opacity duration-200 ease-in-out',
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                        )}
                    />
                </div>
                <span className="text-lg font-bold">{isOpen ? 'Zamknij' : 'Menu'}</span>
            </button>

            {/* ============ Mobile Menu ============ */}
            {isOpen && (
                <>
                    <nav
                        className={cn(
                            'fixed inset-0 z-40',
                            'pt-24',
                            'font-nav text-theme-txt text-center text-lg font-bold',
                            'from-theme-ui-bg-dark via-theme-ui-bg-medium to-theme-ui-bg-dark bg-linear-to-r',
                            'transition-transform duration-500'
                        )}
                    >
                        <ul className="mx-auto h-full space-y-4 overflow-x-auto overflow-y-auto pb-8 whitespace-nowrap">
                            {navItems.map((item, i) => (
                                <li key={item.path} className="hover:text-theme-txt-h">
                                    <Link
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            'block w-full',
                                            pathname === item.path
                                                ? 'text-theme-txt-h underline'
                                                : ''
                                        )}
                                    >
                                        {item.mainNav?.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Sign-in/Sign-out */}
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
                                        href={ROUTES.SIGN_IN.path}
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
