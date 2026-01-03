import { redirect } from 'next/navigation';

import { getUserSession } from '@/utils/getUserSession';

import UserPanelHeader from '@/components/UserPanelHeader';

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
