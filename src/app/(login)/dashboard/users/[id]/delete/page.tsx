import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ROUTES } from '@/constants/routes';

import DeleteUserForm, { DeleteUserFormProps } from './components/DeleteUserForm';

export default async function DeleteUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const userId = Number(id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            plots: {
                select: {
                    id: true,
                },
            },
        },
    });

    if (!user) redirect(ROUTES.USERS_DASHBOARD.path);

    const formUser: DeleteUserFormProps = {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plots.map((p) => ({ id: Number(p.id) })),
    };

    return (
        <section>
            <h2>Usuń konto</h2>

            <DeleteUserForm user={formUser} />
        </section>
    );
}
