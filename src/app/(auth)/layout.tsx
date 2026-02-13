import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { getUserSession } from '@/lib/auth/get-user-session';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
    title: {
        default: 'Mój profil',
        template: 'Mój profil - %s | ROD "Stokrotka" Sanok',
    },
    robots: 'noindex, nofollow',
};

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getUserSession();
    if (!session) redirect('/sign-in');

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Analytics />
        </>
    );
}
