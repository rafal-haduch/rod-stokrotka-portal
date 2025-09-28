import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PreFooter from '@/components/PreFooter';
import { lato, bonheurRoyale, aboreto, libreBodoni } from './fonts';
import { metadata } from './metadata';

export { metadata };

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
            <body className=" bg-sky-200 text-gray-900">
                <Navbar />

                <header>
                    <Hero />
                </header>

                <main className="bg-gray-100 max-w-7xl mx-auto min-h-screen px-4 py-8 space-y-16">
                    {children}
                </main>

                <PreFooter />
                <Footer />
            </body>
        </html>
    );
}
