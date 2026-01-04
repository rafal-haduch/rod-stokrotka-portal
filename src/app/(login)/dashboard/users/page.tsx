import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';
import { getRoleLabel } from '@/utils/getRoleLabel';

export default async function DashboardUsersPage() {
    const users = await prisma.user.findMany({
        include: {
            plots: {
                select: {
                    id: true,
                },
            },
        },
    });

    return (
        <article>
            <h2>Tabela działkowców</h2>
            <Link
                href="/dashboard/users/create"
                className="btn btn-icon btn-theme mx-auto mb-4"
                title="Dodaj nowe konto"
            >
                <Plus />
            </Link>
            <section>
                <table className="text-xs md:text-sm lg:text-base">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Osoba</th>
                            <th>Działka</th>
                            <th>Rola</th>
                            <th>Dodano</th>
                            <th>Logowanie</th>
                            <th>Edytuj</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    {user.plots.length > 0
                                        ? user.plots.map((plot) => plot.id).join(', ')
                                        : '—'}
                                </td>
                                <td>{getRoleLabel(user.role)}</td>
                                <td>{user.createdAt.toLocaleDateString('pl-PL')}</td>
                                <td>
                                    {user.lastLogin
                                        ? user.lastLogin.toLocaleDateString('pl-PL')
                                        : '—'}
                                </td>
                                <td>
                                    <Link
                                        href={`/dashboard/users/${user.id}/edit`}
                                        title="Edytuj konto"
                                        className="btn btn-primary btn-in-table"
                                    >
                                        <Pencil />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        href={`/dashboard/users/${user.id}/delete`}
                                        title="Usuń konto"
                                        className="btn btn-danger btn-in-table"
                                    >
                                        <Trash2 />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </article>
    );
}
