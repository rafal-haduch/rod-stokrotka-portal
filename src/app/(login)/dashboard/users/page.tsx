import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { prisma } from '@/lib/prisma';
import { getRoleLabel } from '@/utils/getRoleLabel';
import { ROUTES } from '@/constants/routes';

export default async function DashboardUsersPage() {
    const users = await prisma.user.findMany({
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
    return (
        <section>
            <h2>Tabela kont działkowców</h2>

            <Link
                href={ROUTES.DASHBOARD_CREATE_USER.path}
                className="btn btn-icon btn-theme mx-auto mb-4"
                title="Dodaj nowe konto"
            >
                <Plus />
            </Link>

            <table className="w-full text-xs md:text-sm lg:text-base">
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
                                {user.plotsId.length > 0
                                    ? user.plotsId.map((p) => p.plot.plotNumber).join(', ')
                                    : '—'}
                            </td>
                            <td>{getRoleLabel(user.role)}</td>
                            <td>{user.createdAt.toLocaleDateString('pl-PL')}</td>
                            <td>
                                {user.lastLogin ? user.lastLogin.toLocaleDateString('pl-PL') : '—'}
                            </td>
                            <td>
                                <Link
                                    href={`/dashboard/users/${user.id}/update`}
                                    title="Edytuj dane konta"
                                    className="btn btn-primary btn-in-table"
                                >
                                    <Pencil />
                                </Link>
                            </td>
                            <td>
                                <Link
                                    href={`/dashboard/users/${user.id}/delete`}
                                    title="Usuń konto z systemu"
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
    );
}
