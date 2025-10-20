import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ROD Stokrotka Sanok',
    description:
        'Strona internetowa Stowarzyszenia Ogrodowego "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności.',
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: 'ROD Stokrotka Sanok',
        description: 'Strona internetowa Stowarzyszenia Ogrodowego Stokrotka w Sanoku',
        url: 'https://rod-stokrotka-sanok.vercel.app',
        siteName: 'ROD Stokrotka Sanok',
        images: [
            {
                url: '/logo.png',
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
        'ROD Stokrotka Sanok',
        'ogród społeczny',
    ],
};
