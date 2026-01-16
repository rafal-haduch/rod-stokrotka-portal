import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import DeleteUserForm, { DeleteUserFormProps } from './_components/delete-user-form';
import { userRepository } from '@/domain/user/user.repository';

export default async function DeleteUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.getUserForDashboardForm({ id });
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const formUser: DeleteUserFormProps = {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plotsId.map((p) => ({ id: Number(p.plot.plotNumber) })),
    };

    return (
        <section>
            <h2>Usuń konto</h2>

            <DeleteUserForm user={formUser} />
        </section>
    );
}
