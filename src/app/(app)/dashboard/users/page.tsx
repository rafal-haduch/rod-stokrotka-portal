import { getSortedPlotsListFromDb } from '@/domain/shared/get-sorted-plots-list-from-db';
import { userRepository } from '@/domain/user/user.repository';
import { mapUsersToUserTableRows } from '@/domain/user/user.mapper';

import DashboardUsersView from './_components/dashboard-users-view';

export default async function DashboardUsersPage() {
    const users = await userRepository.findManyWithPlots();
    const userTableRows = mapUsersToUserTableRows(users);

    const availablePlots = await getSortedPlotsListFromDb();

    return <DashboardUsersView userTableRows={userTableRows} availablePlots={availablePlots} />;
}
