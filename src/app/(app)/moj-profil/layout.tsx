import { Metadata } from 'next';

import UserPanelHeader from './_components/user-panel-header';

export const metadata: Metadata = {
    title: 'Mój profil',
    robots: 'noindex, nofollow',
};

export default async function MyProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <main aria-labelledby="user-context-heading" className="py-0 pb-24 lg:py-6 lg:pb-24">
            <UserPanelHeader />
            {children}
        </main>
    );
}
