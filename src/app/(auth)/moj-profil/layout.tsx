import { Metadata } from 'next';

import UserPanelHeader from './_components/user-panel-header';

export const metadata: Metadata = {
    title: 'Mój profil',
    robots: 'noindex, nofollow',
};

export default async function MyProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <main
            aria-labelledby="user-context-heading"
            className="px-4 py-2 pb-24 sm:px-6 sm:py-4 lg:px-8 lg:py-8"
        >
            <UserPanelHeader />
            {children}
        </main>
    );
}
