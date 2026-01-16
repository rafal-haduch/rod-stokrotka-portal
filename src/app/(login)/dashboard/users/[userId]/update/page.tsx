import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import UpdateUserForm from './_components/update-user-form';
import { userRepository } from '@/domain/user/user.repository';
import { plotRepository } from '@/domain/plot/plot.repository';
import { mapUserToUserUpdateForm } from '@/domain/user/user.mapper';

export default async function UpdateUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.findByIdWithPlots(id);
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const userForUpdate = mapUserToUserUpdateForm(user);

    //REVIEW: czy wydobrebnic funkcje w katalogu domain ktora pobiera i sortuje liste dzialek?
    const plotsListDb = (await plotRepository.getPlotsList()).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );

    return (
        <section>
            <h2>Edytuj konto</h2>

            <UpdateUserForm user={userForUpdate} plotsList={plotsListDb} />
        </section>
    );
}
