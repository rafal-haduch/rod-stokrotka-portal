import { getSortedAvailablePlots } from '@/features/plot/queries/get-sorted-available-plots.query';

import { getUserTableRows } from '@/features/user/domain/queries/get-user-table-rows.query';
import DashboardUsersView from '@/features/user/ui/dashboard-users-view';

export default async function DashboardUsersPage() {
    const userTableRows = await getUserTableRows();
    const availablePlots = await getSortedAvailablePlots();

    return <DashboardUsersView userTableRows={userTableRows} plotOptions={availablePlots} />;
}
