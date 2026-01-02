'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogIn, User } from 'lucide-react';

import { cn } from '@/utils/cn';

import logo from '@/../public/assets/logo.svg';

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'STRONA GŁÓWNA', href: '/' },
    { name: 'O NAS', href: '/about-us' },
    { name: 'MAPA', href: '/map' },
    { name: 'GALERIA', href: '/gallery' },
    { name: 'WŁADZE', href: '/structure-association' },
    { name: 'KONTAKT', href: '/contact' },
    { name: 'DOKUMENTY', href: '/documents' },
    { name: 'OPŁATY', href: '/fees' },
    { name: 'INFORMACJE', href: '/information' },
    { name: 'OGŁOSZENIA', href: '/announcements' },
    { name: 'WSPOMNIENIA', href: '/memories' },
    { name: 'INWESTYCJE', href: '/investments' },
    { name: 'PORADY OGRODOWE', href: '/gardening-guide' },
] as const;

export default function Navbar() {
    const { data: session, status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsClient(true);
        const mediaQuery = window.matchMedia('(min-width: 1280px)');

        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            // If the screen is at least 1280px → hide the mobile menu
            // If smaller → show it back
            setIsVisible(!e.matches);
        };

        // First check
        handleChange(mediaQuery);

        // Listening for changes
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
        <nav
            className={cn(
                'sticky top-0 z-50 mx-auto',
                'px-4 py-2',
                'flex items-center justify-between',
                'font-nav',
                'from-theme-ui-bg-medium to-theme-ui-bg-dark bg-linear-to-b',
                'border-theme-ui-border-dark border-b-4'
            )}
        >
            {/* Logo - always visible */}
            <div className="z-50 shrink-0">
                <Link href="/" className="block">
                    <Image
                        src={logo}
                        alt="Logo Ogordu Stokrotka Sanok."
                        priority
                        className="max-h-16 w-auto sm:max-h-22"
                    />
                </Link>
            </div>

            {/* ============ Desktop Menu ============ */}
            {/* Nav */}
            <ul
                className={cn(
                    'hidden flex-wrap justify-center gap-x-6 gap-y-3 xl:flex xl:flex-1',
                    'font-nav font-bold',
                    'text-theme-txt'
                )}
            >
                {navLinks.map((item) => (
                    <li
                        key={item.href}
                        className={cn(
                            'hover:text-theme-txt-h',
                            'cursor-pointer',
                            pathname === item.href ? 'text-theme-txt-h underline' : ''
                        )}
                    >
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            {/* REVIEW: klasy  */}
            {/* Login */}
            {isLoggedIn ? (
                <Link
                    href="/my-profile"
                    className={cn(
                        'hidden flex-col items-center xl:flex',
                        'text-white',
                        'cursor-pointer hover:underline'
                    )}
                >
                    <User size={42} />
                    <span className="text-xl font-bold">MÓJ PROFIL</span>
                </Link>
            ) : (
                <Link
                    href="/sign-in"
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

            {/* ============ Mobile Menu ============ */}
            {/* Nav */}
            {isClient && (
                <ul
                    className={cn(
                        'fixed inset-0 z-40 flex h-screen w-screen origin-top',
                        'pt-20',
                        'flex-col items-center justify-center gap-4',
                        'font-nav text-theme-txt text-center text-xl font-bold',
                        'from-theme-ui-bg-dark via-theme-ui-bg-medium to-theme-ui-bg-dark bg-linear-to-r',
                        'transition-transform duration-500',
                        isClient && isOpen ? 'scale-y-100' : 'scale-y-0',
                        isClient && isVisible ? '' : 'hidden'
                    )}
                >
                    {/* TODO: change animation */}
                    {navLinks.map((item, i) => (
                        <li key={item.href} className="hover:text-theme-txt-h">
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'block w-full',
                                    'transform transition-all duration-500 ease-out',
                                    pathname === item.href ? 'text-theme-txt-h underline' : '',
                                    isClient && isOpen
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-[120vw] opacity-0'
                                )}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Login */}
                    <li>
                        {isLoggedIn ? (
                            <Link
                                href="/my-profile"
                                className={cn(
                                    'mt-4 flex items-center space-x-2',
                                    'text-white',
                                    'transition-opacity duration-300 hover:underline',
                                    isClient && isOpen
                                        ? 'opacity-100 delay-300'
                                        : 'opacity-0 delay-0'
                                )}
                            >
                                <User size={42} />
                                <span className="text-xl font-bold">MÓJ PROFIL</span>
                            </Link>
                        ) : (
                            <Link
                                href="/sign-in"
                                className={cn(
                                    'mt-4 flex items-center space-x-2',
                                    'text-white',
                                    'transition-opacity duration-300 hover:underline',
                                    isClient && isOpen
                                        ? 'opacity-100 delay-300'
                                        : 'opacity-0 delay-0'
                                )}
                            >
                                <LogIn size={42} />
                                <span className="text-xl font-bold">LOGOWANIE</span>
                            </Link>
                        )}
                    </li>
                </ul>
            )}

            {/* TODO: fix hamburger position in very small screen */}
            {/* Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'text-theme-txt',
                    'relative z-50 flex flex-col items-center justify-center hover:cursor-pointer xl:hidden'
                )}
                aria-label="Toggle menu"
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
        </nav>
    );
}
