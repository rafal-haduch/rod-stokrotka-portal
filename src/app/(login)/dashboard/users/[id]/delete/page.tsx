import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { deleteUser } from '@/actions/user/delete';

export default async function DeleteUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const userId = Number(id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) redirect('/dashboard/users');

    return (
        <article>
            <h1>Usunąć użytkownika?</h1>
            <p>
                Czy na pewno chcesz usunąć użytkownika <strong>{user.name}</strong>?
            </p>
            <p className="text-red-600">Operacja jest trwała i nie można jej cofnąć.</p>

            <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className="danger">Usuń</button>
            </form>
        </article>
    );
}
