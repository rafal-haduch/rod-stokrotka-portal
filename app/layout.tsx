import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
    title: 'Stokrotka',
    description: 'Strona internetowa rodzinnych ogrodów działkowych Stokrotka.',
    icons: {
        icon: '/favicon.ico',
        //apple: '/apple-touch-icon.png', // opcjonalnie dla Apple
    },
};

const lato = localFont({
    src: [
        {
            path: '../fonts/Lato-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-lato',
});

const playball = localFont({
    src: [
        {
            path: '../fonts/Playball-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-playball',
});

const quicksand = localFont({
    src: [
        {
            path: '../fonts/QuickSand-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-quicksand',
});

const libreBodoni = localFont({
    src: [
        {
            path: '../fonts/LibreBodoni-Regular.ttf',
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
            className={`${lato.variable} ${playball.variable} ${quicksand.variable} ${libreBodoni.variable}`}
        >
            <body className="bg-blue-300 text-gray-900 font-sans">
                <Navbar />
                <Hero />
                <main className="bg-gray-50 max-w-7xl mx-auto min-h-screen px-4 py-8 space-y-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
