import { getSortedAvailablePlots } from '@/features/plot/queries/get-sorted-available-plots.query';

import { getUserTableRows } from '@/features/user/domain/queries/get-user-table-rows.query';
import CMSUsersView from '@/features/user/ui/cms-users-view';

export default async function CMSUsersPage() {
    const userTableRows = await getUserTableRows();
    const availablePlots = await getSortedAvailablePlots();

    return <CMSUsersView userTableRows={userTableRows} plotOptions={availablePlots} />;
}
