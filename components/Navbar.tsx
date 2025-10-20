'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { navLinks } from '@/data';

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
                'sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-between',
                'border-b-4 border-lime-400',
                'bg-gradient-to-b from-lime-200 to-lime-300',
                'px-4 py-2'
            )}
        >
            {/* Logo - always visible */}
            <div className="z-50 flex-shrink-0">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/logo.png"
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
            <ul className="hidden flex-wrap justify-center gap-x-6 gap-y-3 [font-family:var(--font-aboreto)] font-bold text-green-600 xl:flex xl:flex-1">
                {navLinks.map((item) => (
                    <li
                        key={item.href}
                        className={cn(
                            'cursor-pointer transition-colors hover:text-green-800 hover:underline',
                            pathname === item.href ? 'text-green-700 underline' : ''
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
                <img src="/login_white_24.svg" alt="Ikona logowania" className="h-10 w-10" />
                <span className="text-xl font-bold">LOGOWANIE</span>
            </Link>

            {/* Mobile Menu */}
            {/* Nav */}
            {isClient && (
                <ul
                    className={cn(
                        'fixed inset-0 z-40 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4',
                        '[font-family:var(--font-aboreto)] font-bold',
                        'border-b-4 border-lime-400',
                        'bg-gradient-to-r from-lime-200 via-lime-300 to-lime-200 pt-20 text-xl text-green-600',
                        'transition-transform duration-500',
                        isClient && isOpen ? 'scale-y-100' : 'scale-y-0',
                        isClient && isVisible ? '' : 'hidden'
                    )}
                >
                    {/* TODO: change animation */}
                    {navLinks.map((item, i) => (
                        <li key={item.href} className="hover:underline">
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'block w-full transform text-center transition-all duration-500 ease-out',
                                    pathname === item.href ? 'text-green-700 underline' : '',
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
                                'mt-4 flex items-center text-white transition-opacity duration-300 hover:underline',
                                isClient && isOpen ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
                            )}
                        >
                            <img
                                src="/login_white_24.svg"
                                alt="Ikona osoby"
                                className="h-10 w-10"
                            />
                            <span>LOGOWANIE</span>
                        </Link>
                    </li>
                </ul>
            )}

            {/* Hamburger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center xl:hidden"
                aria-label="Toggle menu"
            >
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-green-600 transition-transform duration-300 ease-in-out',
                        isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                    )}
                ></span>
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-green-600 transition-opacity duration-200 ease-in-out',
                        isOpen ? 'opacity-0' : 'opacity-100'
                    )}
                ></span>
                <span
                    className={cn(
                        'absolute h-1 w-8 bg-green-600 transition-transform duration-300 ease-in-out',
                        isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                    )}
                ></span>
            </button>
        </nav>
    );
}
