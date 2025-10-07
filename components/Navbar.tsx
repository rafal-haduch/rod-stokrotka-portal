'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

const navLink = [
    { name: 'STRONA GŁÓWNA', href: '/' },
    { name: 'O NAS', href: '/about-us' },
    { name: 'MAPA OGRODU', href: '/garden-map' },
    { name: 'ZARZĄD', href: '/management' },
    { name: 'KONTAKT', href: '/contact' },
    { name: 'DOKUMENTY', href: '/documents' },
    { name: 'OPŁATY', href: '/fees' },
    { name: 'INFORMACJE', href: '/information' },
    { name: 'OGŁOSZENIA', href: '/announcements' },
    { name: 'INWESTYCJE', href: '/investments' },
    { name: 'GALERIA', href: '/gallery' },
    { name: 'PORADY OGRODOWE', href: '/gardening-guide' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
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
                'sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-between',
                'rounded-b-2xl border-b-3 border-gray-50',
                'bg-gradient-to-br from-sky-300 via-blue-400 to-sky-300',
                'px-4 py-2 [font-family:var(--font-aboreto)] font-bold'
            )}
        >
            {/* Logo - always visible */}
            <div className="z-50 flex-shrink-0">
                <Link href="/" className="cursor-pointer">
                    <img src="/logo.png" alt="Logo ogrodu Stokrotka." className="h-20 w-auto" />
                </Link>
            </div>

            {/* Desktop Menu */}
            {/* Nav */}
            <ul className="hidden flex-wrap justify-center gap-x-8 gap-y-3 text-gray-50 xl:flex xl:flex-1">
                {navLink.map((item) => (
                    <li key={item.href} className="cursor-pointer hover:underline">
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Login */}
            <Link
                href="/sign-in"
                className="hidden cursor-pointer flex-col items-center text-amber-200 hover:underline xl:flex"
            >
                <img src="/login_icon.svg" alt="Ikona osoby" className="h-10 w-10" />
                <span>LOGOWANIE</span>
            </Link>

            {/* Mobile Menu */}
            {/* Nav */}
            <ul
                className={cn(
                    'fixed inset-0 z-40 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4',
                    'rounded-b-2xl border-b-3 border-gray-50',
                    'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 pt-20 text-xl text-amber-50',
                    'transition-transform duration-500',
                    isOpen ? 'scale-y-100' : 'scale-y-0',
                    isVisible ? '' : 'hidden'
                )}
            >
                {/* TODO: change animation */}
                {navLink.map((item, i) => (
                    <li key={item.href} className="hover:underline">
                        <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'block w-full transform text-center transition-all duration-500 ease-out',
                                isOpen
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
                            'mt-4 flex items-center text-amber-200 transition-opacity duration-300 hover:underline',
                            isOpen ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
                        )}
                    >
                        <img src="/login_icon.svg" alt="Ikona osoby" className="h-10 w-10" />
                        <span>LOGOWANIE</span>
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center xl:hidden"
                aria-label="Toggle menu"
            >
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-white transition-transform duration-300 ease-in-out',
                        isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                    )}
                ></span>
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-white transition-opacity duration-200 ease-in-out',
                        isOpen ? 'opacity-0' : 'opacity-100'
                    )}
                ></span>
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-white transition-transform duration-300 ease-in-out',
                        isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                    )}
                ></span>
            </button>
        </nav>
    );
}
