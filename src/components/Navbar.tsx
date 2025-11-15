'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogIn } from 'lucide-react';

import { cn } from '@/utils/cn';

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'STRONA GŁÓWNA', href: '/' },
    { name: 'O NAS', href: '/about-us' },
    { name: 'MAPA OGRODU', href: '/garden-map' },
    { name: 'WŁADZE', href: '/structure-association' },
    { name: 'KONTAKT', href: '/contact' },
    { name: 'DOKUMENTY', href: '/documents' },
    { name: 'OPŁATY', href: '/fees' },
    { name: 'INFORMACJE', href: '/information' },
    { name: 'OGŁOSZENIA', href: '/announcements' },
    { name: 'INWESTYCJE', href: '/investments' },
    { name: 'GALERIA', href: '/gallery' },
    { name: 'PORADY OGRODOWE', href: '/gardening-guide' },
] as const;

export default function Navbar() {
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

    return (
        <nav
            className={cn(
                'from-color-theme-light to-color-theme-medium border-color-theme-dark',
                'sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-between px-4 py-2',
                'bg-gradient-to-b',
                'border-b-4'
            )}
        >
            {/* Logo - always visible */}
            <div className="z-50 flex-shrink-0">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo Ogordu Stokrotka Sanok."
                        width={150}
                        height={80}
                        priority
                        className="h-auto w-full object-cover"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            {/* Nav */}
            <ul
                className={cn(
                    'font-nav text-color-theme-txt-dark',
                    'hidden flex-wrap justify-center gap-x-6 gap-y-3 font-bold xl:flex xl:flex-1'
                )}
            >
                {navLinks.map((item) => (
                    <li
                        key={item.href}
                        className={cn(
                            'hover:text-color-theme-txt-extra-dark',
                            'cursor-pointer transition-colors',
                            pathname === item.href
                                ? 'text-color-theme-txt-extra-dark underline'
                                : ''
                        )}
                    >
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Login */}
            <Link
                href="/sign-in"
                className="hidden cursor-pointer flex-col items-center text-white hover:underline xl:flex"
            >
                <LogIn size={42} />
                <span className="font-nav text-xl font-bold">LOGOWANIE</span>
            </Link>

            {/* Mobile Menu */}
            {/* Nav */}
            {isClient && (
                <ul
                    className={cn(
                        'border-color-theme-medium from-color-theme-medium via-color-theme-light to-color-theme-medium text-color-theme-txt-dark',
                        'fixed inset-0 z-40 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4 pt-20',
                        'font-nav text-xl font-bold',
                        'border-b-4 bg-gradient-to-r',
                        'transition-transform duration-500',
                        isClient && isOpen ? 'scale-y-100' : 'scale-y-0',
                        isClient && isVisible ? '' : 'hidden'
                    )}
                >
                    {/* TODO: change animation */}
                    {navLinks.map((item, i) => (
                        <li key={item.href} className="hover:text-color-theme-txt-extra-dark">
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'block w-full transform text-center transition-all duration-500 ease-out',
                                    pathname === item.href
                                        ? 'text-color-theme-txt-extra-dark underline'
                                        : '',
                                    isClient && isOpen
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-[120vw] opacity-0'
                                )}
                            >
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                    {/* Login */}
                    <li>
                        <Link
                            href="/sign-in"
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'mt-4 flex items-center space-x-2 text-white transition-opacity duration-300 hover:underline',
                                isClient && isOpen ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
                            )}
                        >
                            <LogIn size={42} />
                            <span>LOGOWANIE</span>
                        </Link>
                    </li>
                </ul>
            )}

            {/* Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex flex-col items-center justify-center hover:cursor-pointer xl:hidden"
                aria-label="Toggle menu"
            >
                <div className="relative flex h-8 w-8 flex-col items-center justify-center">
                    <span
                        className={cn(
                            'bg-color-theme-txt-dark',
                            'absolute h-1 w-8 transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                        )}
                    />
                    <span
                        className={cn(
                            'bg-color-theme-txt-dark',
                            'absolute h-1 w-8 transition-opacity duration-200 ease-in-out',
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
                    />
                    <span
                        className={cn(
                            'bg-color-theme-txt-dark',
                            'absolute h-1 w-8 transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                        )}
                    />
                </div>
                <span className={cn('text-color-theme-txt-dark', 'text-lg')}>
                    {isOpen ? 'Zamknij' : 'Menu'}
                </span>
            </button>
        </nav>
    );
}
