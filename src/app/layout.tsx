import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import '../styles/globals.css';
import { nunito, fleurDeLeah, aboreto, merriweather } from '../fonts/fonts';

import JsonLdOrganization from '@/components/json-ld-organization';
import SessionProviderClientComponent from '@/components/session-provider-client-component';
import { ThemeProvider } from '@/components/theme-provider';
import DynamicClientLayout from '@/components/dynamic-client-layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PreFooter from '@/components/pre-footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://rod-stokrotka-sanok.vercel.app'),
    title: 'ROD Stokrotka Sanok',
    description:
        'Strona internetowa Stowarzyszenia Ogrodowego "Stokrotka" w Sanoku. Publikujemy tutaj ogłoszenia, informacje organizacyjne i aktualności dotyczące życia naszego ogrodu.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'ROD Stokrotka Sanok',
        description: 'Strona internetowa Stowarzyszenia Ogrodowego Stokrotka w Sanoku',
        url: 'https://rod-stokrotka-sanok.vercel.app',
        siteName: 'ROD Stokrotka Sanok',
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
                    <ThemeProvider>
                        <Navbar />
                        <DynamicClientLayout>
                            <main>{children}</main>
                        </DynamicClientLayout>
                        <PreFooter />
                        <Footer />
                    </ThemeProvider>
                </SessionProviderClientComponent>
                <Analytics />
            </body>
        </html>
    );
}
