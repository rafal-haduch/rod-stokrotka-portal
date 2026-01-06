import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ROUTES } from '@/constants/routes';

import UpdateUserForm, { UpdateUserFormProps } from './components/UpdateUserForm';

export default async function UpdateUserPage({ params }: { params: Promise<{ id: string }> }) {
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

    const formUser: UpdateUserFormProps = {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plots.map((p) => ({ id: Number(p.id) })),
    };

    return (
        <section>
            <h2>Edytuj konto</h2>

            <UpdateUserForm user={formUser} />
        </section>
    );
}
