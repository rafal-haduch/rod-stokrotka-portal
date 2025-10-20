import { lato, bonheurRoyale, aboreto, libreBodoni } from '../fonts/fonts';
import { metadata } from './metadata';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PreFooter from '@/components/PreFooter';
import HeroWrapper from '@/components/HeroWrapper';
import ClientLayout from './client-layout';
import JsonLdOrganization from '@/components/JsonLdOrganization';

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
            <body>
                <JsonLdOrganization />
                <Navbar />
                <ClientLayout>
                    <header>
                        <HeroWrapper />
                    </header>
                    <main>{children}</main>
                    <PreFooter />
                    <Footer />
                </ClientLayout>
            </body>
        </html>
    );
}
