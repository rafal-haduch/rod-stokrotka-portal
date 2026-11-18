import { Metadata } from 'next';

import { requireAdminOrBoardRole, requireSession } from '@/shared/auth/guards';

import { CMSPanelHeader } from '@/app/(authenticated)/panel/_components/cms-panel-header';

export const metadata: Metadata = {
    title: 'Panel zarządzania',
    robots: 'noindex, nofollow',
};

export default async function CMSLayout({ children }: { children: React.ReactNode }) {
    const session = await requireSession();
    requireAdminOrBoardRole(session.role);

    return (
        <main
            aria-labelledby="cms-context-heading"
            className="space-y-8 px-2 py-2 pb-24 sm:space-y-12 sm:px-4 sm:py-4 md:px-6 lg:px-8 lg:py-8"
        >
            <CMSPanelHeader />
            {children}
        </main>
    );
}
