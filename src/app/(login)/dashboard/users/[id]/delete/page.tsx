import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { deleteUser } from '@/actions/user/delete';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default async function DeleteUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const userId = Number(id);

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) redirect('/dashboard/users');

    return (
        <article>
            <h2>Usuwanie użytkownika</h2>

            <form
                action={deleteUser}
                className="bg-theme-ui-bg-light mx-auto flex max-w-xl flex-col gap-4 rounded-xl p-4 shadow-lg"
            >
                <div>
                    <p className="text-center">
                        Czy na pewno chcesz usunąć konto osoby <strong>{user.name}</strong>?
                        <br />
                        <span className="text-red-600">
                            Operacja jest trwała i nie można jej cofnąć!
                        </span>
                    </p>
                </div>

                <input type="hidden" name="id" value={user.id} />

                <div className="flex justify-center gap-10">
                    <Link
                        href={ROUTES.USERS_DASHBOARD.path}
                        title="Anuluj proces usuwania konta"
                        className="btn btn-sm btn-theme"
                    >
                        Anuluj
                    </Link>
                    <button type="submit" title="Usuń konto" className="btn btn-sm btn-danger">
                        Usuń <Trash2 />
                    </button>
                </div>
            </form>
        </article>
    );
}
