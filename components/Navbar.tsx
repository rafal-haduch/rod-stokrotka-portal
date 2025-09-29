import Link from 'next/link';

export default function Navbar() {
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
        <nav className="sticky top-0 z-1  bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-600 mx-auto py-2 px-4 flex items-center justify-between flex-wrap border-b-3 border-gray-50 rounded-b-2xl">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="Logo ogrodu Stokrotka."
                        className="w-40"
                    />
                </Link>
            </div>

            {/* Nav */}
            <div className="flex-1">
                <menu className="flex flex-wrap justify-center gap-x-8 gap-y-3  [font-family:var(--font-aboreto)] font-bold text-amber-50">
                    {navLink.map((item) => (
                        <li
                            key={item.href}
                            className="hover:underline cursor-pointer"
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </menu>
            </div>

            {/* Sign In */}
            <div className="flex-shrink-0 pr-1">
                <Link
                    href="/sign-in"
                    className="text-amber-200 font-bold hover:underline cursor-pointer flex flex-col items-center"
                >
                    <img
                        src="/person_icon.svg"
                        alt="Ikona osoby"
                        className="w-10 h-10"
                    />
                    <span>LOGOWANIE</span>
                </Link>
            </div>
        </nav>
    );
}
