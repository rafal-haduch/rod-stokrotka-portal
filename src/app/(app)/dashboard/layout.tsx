import { redirect } from 'next/navigation';
import { Metadata } from 'next';

import { ROUTES } from '@/constants/routes';

import { getUserSession } from '@/lib/auth/get-user-session';

import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

import DashboardPanelHeader from './_components/dashboard-panel-header';

export const metadata: Metadata = {
    title: 'Panel zarządu',
    robots: 'noindex, nofollow',
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();
    if (!session || !isAdminOrBoard(session.role)) redirect(ROUTES.MY_PROFILE.path);

    return (
        <main aria-labelledby="dashboard-context-heading" className="py-0 pb-24 lg:py-6 lg:pb-24">
            <DashboardPanelHeader />
            {children}
        </main>
    );
}
