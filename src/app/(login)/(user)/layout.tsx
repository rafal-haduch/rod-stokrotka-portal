import { getUserSession } from '@/utils/getUserSession';
import { redirect } from 'next/navigation';
import UserPanelHeader from '@/components/UserPanelHeader';

export default async function UserLayout({ children }: { children: React.ReactNode }) {
    const user = await getUserSession();
    if (!user) redirect('/sign-in');

    return (
        <section className="user-panel-layout">
            <UserPanelHeader user={user} />
            <main>{children}</main>
        </section>
    );
}
