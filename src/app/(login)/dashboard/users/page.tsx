import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import { prisma } from '@/lib/prisma';
import { UserPen, UserPlus, UserX } from 'lucide-react';
import Link from 'next/link';

export default async function UserDashboardPage() {
    const users = await prisma.user.findMany({
        include: {
            plots: {
                select: {
                    id: true,
                },
            },
        },
    });

    const roleMap: Record<string, string> = {
        ADMIN: 'Administrator Strony',
        PRESIDENT: 'Prezes',
        DEPUTY_PRESIDENT: 'Zastępca Prezesa',
        SECRETARY: 'Sekretarz',
        TREASURER: 'Skarbnik',
        BOARD_MEMBER: 'Członek Zarządu',
        ALLOTMENT_GARDENER: 'Działkowiec',
    };

    return (
        <article>
            <header>
                <h1>Panel Administracyjny</h1>
                <MainHeaderLineSeparator />
            </header>
            <h2>Tabela działkowców</h2>
            <Link
                href="/dashboard/users/create"
                className="button-text mx-auto mb-4"
                title="Dodaj nowe konto"
            >
                <UserPlus />
            </Link>
            <section>
                <table className="w-full text-xs md:text-sm lg:text-lg">
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
                                <th>{user.id}</th>
                                <th>{user.name}</th>
                                <th>
                                    {user.plots.length > 0
                                        ? user.plots.map((plot) => plot.id).join(', ')
                                        : '—'}
                                </th>
                                <th>{roleMap[user.role]}</th>
                                <th>{user.createdAt.toLocaleDateString('pl-PL')}</th>
                                <th>
                                    {user.lastLogin
                                        ? user.lastLogin.toLocaleDateString('pl-PL')
                                        : '—'}
                                </th>
                                <th className="">
                                    <Link
                                        href={`/dashboard/users/${user.id}/edit`}
                                        title="Edytuj konto"
                                        className="flex w-fit justify-center gap-1 rounded-lg border bg-gray-100 px-3 whitespace-nowrap text-sky-500 transition hover:cursor-pointer"
                                    >
                                        <UserPen />
                                    </Link>
                                </th>
                                <th>
                                    <Link
                                        href={`/dashboard/users/${user.id}/delete`}
                                        title="Usuń konto"
                                        className="flex w-fit justify-center gap-1 rounded-lg border bg-gray-100 px-3 whitespace-nowrap text-red-700 transition hover:cursor-pointer"
                                    >
                                        <UserX />
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </article>
    );
}
