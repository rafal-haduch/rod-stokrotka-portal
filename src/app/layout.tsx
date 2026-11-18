import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Nunito, Fleur_De_Leah, Aboreto, Merriweather } from 'next/font/google';

import { BASE_URL, FULL_SITE_NAME, SHORT_SITE_NAME } from '@/data/site';
import { ADDRESS, EMAIL } from '@/data/contact';
import { ASSOCIATION_NAME } from '@/data/association';

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
    metadataBase: new URL(BASE_URL),
    title: {
        default: FULL_SITE_NAME,
        template: `%s | ${SHORT_SITE_NAME}`,
    },
    description:
        'Strona Internetowa Rodzinnych Ogrodów Działkowych "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności dotyczące życia naszego ogrodu.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        url: BASE_URL,
        title: FULL_SITE_NAME,
        description:
            'Strona Internetowa Rodzinnych Ogrodów Działkowych "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności dotyczące życia naszego ogrodu.',
        siteName: FULL_SITE_NAME,
        images: ['/og-image.png'],
        locale: 'pl_PL',
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
            name: ASSOCIATION_NAME,
            url: BASE_URL,
            logo: `${BASE_URL}/logo.png`,
            email: EMAIL,
            address: {
                '@type': 'PostalAddress',
                streetAddress: ADDRESS.street,
                addressLocality: ADDRESS.town,
                postalCode: ADDRESS.postalCode,
                addressCountry: 'PL',
            },
        },
        {
            '@type': 'WebSite',
            name: FULL_SITE_NAME,
            url: BASE_URL,
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
