import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { getUserSession } from '@/lib/auth/get-user-session';

import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import DashboardPanelHeader from './_components/dashboard-panel-header';

export const metadata: Metadata = {
    title: 'Panel zarządu',
    robots: 'noindex, nofollow',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();
    if (!session || !isAdminOrBoard(session.role)) redirect('/sign-in');

    return (
        <>
            <Navbar />
            <DashboardPanelHeader />
            <main>{children}</main>
            <Footer />
            <Analytics />
        </>
    );
}
