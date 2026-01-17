import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import UpdateUserForm from './_components/update-user-form';
import { userRepository } from '@/domain/user/user.repository';
import { plotRepository } from '@/domain/plot/plot.repository';
import { mapUserToUserUpdateForm } from '@/domain/user/user.mapper';
import { getSortedPlotsListFromDb } from '@/domain/shared/get-sorted-plots-list-from-db';

export default async function UpdateUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.findByIdWithPlots(id);
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const userForUpdate = mapUserToUserUpdateForm(user);

    const availablePlots = await getSortedPlotsListFromDb();

    return (
        <section>
            <h2>Edytuj konto</h2>

            <UpdateUserForm user={userForUpdate} plotsOptions={availablePlots} />
        </section>
    );
}
