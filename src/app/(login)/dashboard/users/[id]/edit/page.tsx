import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { Role } from '@prisma/client';
import EditUserForm, { EditUserFormProps } from './components/EditUserForm';

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

    if (!user) redirect('/dashboard/users');

    const formUser: EditUserFormProps['user'] = {
        id: user.id,
        name: user.name,
        role: user.role,
        plots: user.plots.map((p) => ({ id: Number(p.id) })),
    };

    return (
        <article>
            <h2>Modyfikuj konto</h2>
            <EditUserForm user={formUser} roles={Object.values(Role)} />
        </article>
    );
}
