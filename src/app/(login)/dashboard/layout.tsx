import { redirect } from 'next/navigation';

import { getUserSession } from '@/lib/auth/get-user-session';
import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

import DashboardPanelHeader from './_components/dashboard-panel-header';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const user = await getUserSession();
    if (!user || !isAdminOrBoard(user.role)) redirect('/sign-in');

    return (
        <article>
            <DashboardPanelHeader />
            <>{children}</>
        </article>
    );
}
