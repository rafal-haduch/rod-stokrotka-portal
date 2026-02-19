import { getDashboardUserTableRows } from '@/domain/user/queries/get-dashboard-user-table-rows';
import { getSortedAvailablePlots } from '@/domain/plot/queries/get-sorted-available-plots.query';

import DashboardUsersView from './_components/dashboard-users-view';

export default async function DashboardUsersPage() {
    const userTableRows = await getDashboardUserTableRows();
    const plotOptions = await getSortedAvailablePlots();

    return <DashboardUsersView userTableRows={userTableRows} plotOptions={plotOptions} />;
}
