import { redirect } from 'next/navigation';

import { getUserSession } from '@/lib/auth/get-user-session';

import UserPanelHeader from './_components/user-panel-header';

export default async function UserLayout({ children }: { children: React.ReactNode }) {
    const user = await getUserSession();
    if (!user) redirect('/sign-in');

    return (
        <section>
            <UserPanelHeader user={user} />
            <main>{children}</main>
        </section>
    );
}
