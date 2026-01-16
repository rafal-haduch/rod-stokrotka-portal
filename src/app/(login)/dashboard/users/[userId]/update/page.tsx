import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import UpdateUserForm, { UpdateUserFormProps } from './_components/update-user-form';
import { userRepository } from '@/domain/user/user.repository';
import { plotRepository } from '@/domain/plot/plot.repository';

export default async function UpdateUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.getUserForDashboardForm({ id });
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    //REVIEW: czy wydobrebnic funkcje w katalogu domain ktora pobiera i sortuje liste dzialek?
    const plotsListDb = (await plotRepository.getPlotsList()).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );

    const formUser: UpdateUserFormProps = {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plotsId.map((p) => ({ id: Number(p.plotId) })),
    };

    return (
        <section>
            <h2>Edytuj konto</h2>

            <UpdateUserForm user={formUser} plotsList={plotsListDb} />
        </section>
    );
}
