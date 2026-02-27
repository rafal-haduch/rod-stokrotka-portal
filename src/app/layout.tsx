import { Analytics } from '@vercel/analytics/next';

import '../styles/globals.css';
import { nunito, fleurDeLeah, aboreto, merriweather } from '@/config/fonts';

import { JsonLdOrganization } from '@/components/json-ld-organization';
import { SessionProviderClientComponent } from '@/components/session-provider-client-component';
import { ThemeProvider } from '@/components/theme-provider';

export { metadata } from '@/config/metadata';

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
