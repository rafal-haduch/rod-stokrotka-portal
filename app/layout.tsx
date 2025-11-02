import type { Metadata } from 'next';

import '../styles/globals.css';
import { lato, bonheurRoyale, aboreto, libreBodoni } from '../fonts/fonts';

import DynamicClientLayout from '@/components/DynamicClientLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PreFooter from '@/components/PreFooter';
import JsonLdOrganization from '@/components/JsonLdOrganization';

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
            className={`${lato.variable} ${bonheurRoyale.variable} ${aboreto.variable} ${libreBodoni.variable}`}
        >
            <body>
                <JsonLdOrganization />
                <Navbar />
                <DynamicClientLayout>
                    <main>{children}</main>
                </DynamicClientLayout>
                <PreFooter />
                <Footer />
            </body>
        </html>
    );
}
