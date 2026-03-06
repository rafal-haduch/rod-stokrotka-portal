import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://rod-stokrotka-sanok.vercel.app'),
    title: {
        default: 'Rodzinne Ogrody Działkowe "Stokrotka" w Sanoku',
        template: '%s | ROD "Stokrotka" Sanok',
    },
    description:
        'Strona Internetowa Stowarzyszenia Rodzinnych Ogrodów Działkowych "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności dotyczące życia naszego ogrodu.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Rodzinne Ogrody Działkowe "Stokrotka" w Sanoku',
        description:
            'Strona Internetowa Stowarzyszenia Rodzinnych Ogrodów Działkowych "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności dotyczące życia naszego ogrodu.',
        url: 'https://rod-stokrotka-sanok.vercel.app',
        siteName: 'Rodzinne Ogrody Działkowe "Stokrotka" w Sanoku',
        images: [
            {
                url: 'https://rod-stokrotka-sanok.vercel.app/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'pl_PL',
        type: 'website',
    },
    keywords: [
        'ROD',
        'Stokrotka',
        'Sanok',
        'ogród',
        'stowarzyszenie',
        'stowarzyszenie ogrodowe',
        'działki',
        'ogród działkowy',
        'ROD Sanok',
        'ogrody działkowe',
        'ogrody działkowe Stokrotka',
        'ogrody działkowe Stokrotka Sanok',
        'działka Stokrotka',
        'ogród Stokrotka',
        'ogród Stokrotka Sanok',
        'ROD Stokrotka Sanok',
        'ogród społeczny',
    ],
};
