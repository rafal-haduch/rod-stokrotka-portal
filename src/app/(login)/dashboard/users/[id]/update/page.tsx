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
            plotsId: {
                select: {
                    plotId: true,
                },
            },
        },
    });

    if (!user) redirect(ROUTES.DASHBOARD_USERS.path);

    const plotsListDb = (
        await prisma.plot.findMany({
            select: {
                id: true,
                plotNumber: true,
            },
        })
    ).sort((a, b) =>
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
