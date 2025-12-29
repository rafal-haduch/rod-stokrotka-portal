import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function UserDashboardPage() {
    const users = await prisma.user.findMany();

    const roleMap: Record<string, string> = {
        ADMIN: 'Administrator',
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
            <Link href="/dashboard/users/create" className="button-text mx-auto mb-4">
                Dodaj +
            </Link>
            <section>
                <table className="w-full text-xs md:table-fixed md:text-sm lg:text-lg">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Login</th>
                            <th>Imię</th>
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
                                <th>{user.login}</th>
                                <th>{user.name}</th>
                                <th>{roleMap[user.role]}</th>
                                <th>{user.createdAt.toLocaleDateString('pl-PL')}</th>
                                <th>
                                    {user.lastLogin
                                        ? user.lastLogin.toLocaleDateString('pl-PL')
                                        : '—'}
                                </th>
                                <th>
                                    <button>Akcja</button>
                                </th>
                                <th>
                                    <button>Akcja</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </article>
    );
}
