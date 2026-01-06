import { redirect } from 'next/navigation';

import { getUserSession } from '@/utils/getUserSession';
import { isAdminOrBoard } from '@/utils/rolePermissions';

import DashboardPanelHeader from '@/components/DashboardPanelHeader';

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
