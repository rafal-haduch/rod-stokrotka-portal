import { redirect } from 'next/navigation';

import { ROUTES } from '@/config/routes';

import UpdateUserForm from './_components/update-user-form';
import { userRepository } from '@/domain/user/user.repository';
import { mapUserToUserUpdateForm } from '@/domain/user/user.mapper';
import { getSortedAvailablePlots } from '@/domain/plot/queries/get-sorted-available-plots.query';

export default async function UpdateUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.findByIdWithPlots(id);
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const userForUpdate = mapUserToUserUpdateForm(user);

    const availablePlots = await getSortedAvailablePlots();

    return (
        <section>
            <h2>Edytuj konto</h2>

            <UpdateUserForm user={userForUpdate} plotsOptions={availablePlots} />
        </section>
    );
}
