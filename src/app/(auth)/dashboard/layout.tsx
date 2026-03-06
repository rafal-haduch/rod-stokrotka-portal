import { redirect } from 'next/navigation';
import { Metadata } from 'next';

import { getUserSession } from '@/shared/lib/next-auth/get-user-session';
import { ROUTES } from '@/shared/config/routes';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';

import DashboardPanelHeader from './_components/dashboard-panel-header';

export const metadata: Metadata = {
    title: 'Panel zarządu',
    robots: 'noindex, nofollow',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();
    if (!session || !isAdminOrBoard(session.role)) redirect(ROUTES.MY_PROFILE.path);

    return (
        <main
            aria-labelledby="dashboard-context-heading"
            className="space-y-8 px-2 py-2 pb-24 sm:space-y-12 sm:px-4 sm:py-4 md:px-6 lg:px-8 lg:py-8"
        >
            <DashboardPanelHeader />
            {children}
        </main>
    );
}
