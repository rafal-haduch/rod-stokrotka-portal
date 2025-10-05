'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

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
        { name: 'WSPOMNIENIA', href: '/memories' },
        { name: 'PORADY OGRODOWE', href: '/gardening-guide' },
    ];

    return (
        <nav className="sticky top-0 z-50 mx-auto flex flex-wrap items-center justify-between rounded-b-2xl border-b-3 border-gray-50 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-600 px-4 py-2 [font-family:var(--font-aboreto)] font-bold">
            {/* Logo - always visible */}
            <div className="z-50 flex-shrink-0">
                <Link href="/" className="cursor-pointer">
                    <img src="/logo.png" alt="Logo ogrodu Stokrotka." className="h-20 w-auto" />
                </Link>
            </div>

            {/* Desktop Menu */}
            {/* Nav - visible only on PC */}
            <ul className="hidden flex-wrap justify-center gap-x-8 gap-y-3 text-amber-50 xl:flex xl:flex-1">
                {navLink.map((item) => (
                    <li key={item.href} className="cursor-pointer hover:underline">
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Sign In - visible only on PC */}
            <Link
                href="/sign-in"
                className="hidden cursor-pointer flex-col items-center text-amber-200 hover:underline xl:flex"
            >
                <img src="/login_icon.svg" alt="Ikona osoby" className="h-10 w-10" />
                <span>LOGOWANIE</span>
            </Link>

            {/* Mobile Menu */}
            {/* Nav - visible only on mobile */}
            <ul
                className={`fixed inset-0 z-40 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4 rounded-b-2xl border-b-3 border-gray-50 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-600 pt-20 text-xl text-amber-50 transition-transform duration-500 ${
                    open ? 'scale-y-100' : 'scale-y-0'
                }`}
            >
                {navLink.map((item, i) => (
                    <li key={item.href} className="hover:underline">
                        <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block w-full text-center"
                            style={{
                                transform: open ? 'translateX(0)' : 'translateX(-120vw)',
                                opacity: open ? 1 : 0,
                                transition:
                                    'transform 420ms cubic-bezier(.2,.8,.2,1), opacity 300ms ease',
                                transitionDelay: open ? `${i * 60}ms` : '0ms',
                            }}
                        >
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}

                {/* Sign In */}
                <li>
                    <Link
                        href="/sign-in"
                        onClick={() => setOpen(false)}
                        className="mt-4 flex items-center text-amber-200 hover:underline"
                        style={{
                            opacity: open ? 1 : 0,
                            transitionDelay: open ? '400ms' : '0ms',
                        }}
                    >
                        <img src="/login_icon.svg" alt="Ikona osoby" className="h-10 w-10" />
                        <span>LOGOWANIE</span>
                    </Link>
                </li>
            </ul>

            {/* Hamburger - visible only on mobile */}
            <button className="z-50 flex flex-col gap-1 xl:hidden" onClick={() => setOpen(!open)}>
                <span className="block h-1 w-8 bg-white"></span>
                <span className="block h-1 w-8 bg-white"></span>
                <span className="block h-1 w-8 bg-white"></span>
            </button>
        </nav>
    );
}
