interface NavLink {
    name: string;
    href: string;
}

export const navLinks: NavLink[] = [
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
