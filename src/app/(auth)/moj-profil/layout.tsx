import { redirect } from 'next/navigation';

import { getUserSession } from '@/lib/auth/get-user-session';

import UserPanelHeader from './_components/user-panel-header';

export default async function MyProfileLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();

    if (!session) redirect('/sign-in');
    //FIXME: semantic html in this and auth layout
    return (
        <>
            <header>
                <UserPanelHeader user={session} />
            </header>
            <>{children}</>
        </>
    );
}
