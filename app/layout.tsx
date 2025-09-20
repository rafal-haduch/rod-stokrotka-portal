import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PreFooter from '@/components/PreFooter';

export const metadata: Metadata = {
    title: 'Stokrotka',
    description:
        'Strona internetowa rodzinnych ogrodów działkowych Stokrotka w Sanoku.',
    icons: {
        icon: '/favicon.png',
        //apple: '/apple-touch-icon.png', // opcjonalnie dla Apple
    },
};

const lato = localFont({
    src: [
        {
            path: '../fonts/Nunito-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-lato',
});

const bonheurRoyale = localFont({
    src: [
        {
            path: '../fonts/FleurDeLeah-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-bonheurroyale',
});

const aboreto = localFont({
    src: [
        {
            path: '../fonts/Aboreto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-aboreto',
});

const libreBodoni = localFont({
    src: [
        {
            path: '../fonts/Merriweather_24pt-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-librebodoni',
});

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
            <body className=" bg-blue-300 text-gray-900">
                <Navbar />

                <header>
                    <Hero />
                </header>

                <main className="bg-gray-50 max-w-7xl mx-auto min-h-screen px-4 py-8 space-y-16">
                    {children}
                </main>

                <PreFooter />
                <Footer />
            </body>
        </html>
    );
}
