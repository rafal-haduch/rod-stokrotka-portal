import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import '../styles/globals.css';
import { nunito, fleurDeLeah, aboreto, merriweather } from '../fonts/fonts';

import JsonLdOrganization from '@/components/json-ld-organization';
import SessionProviderClientComponent from '@/components/session-provider-client-component';
import { ThemeProvider } from '@/components/theme-provider';

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
        'działka Stokrotka',
        'ogród Stokrotka',
        'ogród Stokrotka Sanok',
        'ROD Stokrotka Sanok',
        'ogród społeczny',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pl"
            className={`${nunito.variable} ${fleurDeLeah.variable} ${aboreto.variable} ${merriweather.variable}`}
        >
            <head>
                <meta name="color-scheme" content="light" />
                <meta name="supported-color-schemes" content="light" />
            </head>
            <body>
                <JsonLdOrganization />
                <SessionProviderClientComponent>
                    <ThemeProvider>{children}</ThemeProvider>
                </SessionProviderClientComponent>
                <Analytics />
            </body>
        </html>
    );
}
