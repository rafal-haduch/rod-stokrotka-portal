import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Nunito, Fleur_De_Leah, Aboreto, Merriweather } from 'next/font/google';

import AppProvider from '@/app/app-provider';

import AppShell from '@/components/layout/app-shell';

import './globals.css';

const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-nunito',
});

const fleurDeLeah = Fleur_De_Leah({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-fleur-de-leah',
});

const aboreto = Aboreto({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-aboreto',
});

const merriweather = Merriweather({
    weight: ['400', '600', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-merriweather',
});

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
        'ogród Stokrotka',
        'ogród Stokrotka Sanok',
        'ROD Stokrotka Sanok',
        'ogród społeczny',
    ],
};

const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            name: 'Rodzinne Ogrody Działkowe „Stokrotka” w Sanoku',
            url: 'https://rod-stokrotka-sanok.vercel.app',
            logo: 'https://rod-stokrotka-sanok.vercel.app/logo.png',
            email: 'rod.stokrotka.sanok@gmail.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'ul. Wolna 12/8',
                addressLocality: 'Sanok',
                postalCode: '38-500',
                addressCountry: 'PL',
            },
        },
        {
            '@type': 'WebSite',
            name: 'Rodzinne Ogrody Działkowe „Stokrotka” w Sanoku',
            url: 'https://rod-stokrotka-sanok.vercel.app',
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
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
                <AppProvider>
                    <AppShell>{children}</AppShell>
                </AppProvider>
                <Analytics />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdOrganization).replace(/</g, '\\u003c'),
                    }}
                />
            </body>
        </html>
    );
}
