import { getUserSession } from '@/utils/getUserSession';
import { redirect } from 'next/navigation';
import UserPanelHeader from '@/components/UserPanelHeader';
import { isAdminOrBoard } from '@/utils/rolePermissions';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const user = await getUserSession();
    if (!user || !isAdminOrBoard(user.role)) redirect('/sign-in');

    return (
        <section className="user-panel-layout">
            <UserPanelHeader user={user} />
            <main>{children}</main>
        </section>
    );
}
