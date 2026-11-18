import { SEO } from '@/config/seo';
import { getSortedAvailablePlots } from '@/features/plot/domain/queries/get-sorted-available-plots-query';

import { getUserTableRows } from '@/features/user/domain/queries/get-user-table-rows-query';
import CMSUsersView from '@/features/user/ui/cms-users-view';

export const metadata = SEO.PANEL_USERS;

export default async function CMSUsersPage() {
    const [userTableRows, availablePlots] = await Promise.all([
        getUserTableRows(),
        getSortedAvailablePlots(),
    ]);

    const mappedUserTableRows = userTableRows.map((u) => ({
        ...u,
        createdAt: new Date(u.createdAt),
        lastLogin: u.lastLogin ? new Date(u.lastLogin) : null,
    }));

    return (
        <CMSUsersView
            userTableRows={mappedUserTableRows}
            plotOptions={availablePlots.plotOptions}
        />
    );
}
