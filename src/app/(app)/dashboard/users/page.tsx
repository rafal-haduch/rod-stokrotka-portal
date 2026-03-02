import { getSortedAvailablePlots } from '@/features/plot/queries/get-sorted-available-plots.query';
import { getDashboardUserTableRows } from '@/features/user/domain/queries/get-dashboard-user-table-rows';

import DashboardUsersView from '@/features/user/ui/dashboard-users-view';

export default async function DashboardUsersPage() {
    const userTableRows = await getDashboardUserTableRows();
    const plotOptions = await getSortedAvailablePlots();

    return <DashboardUsersView userTableRows={userTableRows} plotOptions={plotOptions} />;
}
