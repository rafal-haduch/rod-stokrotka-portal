import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import DeleteUserForm from './_components/delete-user-form';
import { userRepository } from '@/domain/user/user.repository';
import { mapUserToUserDeleteForm } from '@/domain/user/user.mapper';

export default async function DeleteUserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const id = Number(userId);

    const user = await userRepository.findByIdWithPlots(id);
    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const userForDeletion = mapUserToUserDeleteForm(user);

    return (
        <section>
            <h2>Usuń konto</h2>

            <DeleteUserForm user={userForDeletion} />
        </section>
    );
}
