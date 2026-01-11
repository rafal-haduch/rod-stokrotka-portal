import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ROUTES } from '@/constants/routes';

import DeleteUserForm, { DeleteUserFormProps } from './_components/delete-user-form';

export default async function DeleteUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const userId = Number(id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            plotsId: {
                include: {
                    plot: {
                        select: {
                            plotNumber: true,
                        },
                    },
                },
            },
        },
    });

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
