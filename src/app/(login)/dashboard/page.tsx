import { redirect } from 'next/navigation';
import { getUserSession } from '@/utils/getUserSession';
import Link from 'next/link';
import { isAdminOrBoard } from '@/utils/rolePermissions';

export default async function DashboardPage() {
    return (
        <article>
            <h2>Panel Administracyjny</h2>
            <section>
                <ul>
                    <li>
                        <Link href="/dashboard/users">Tabela Działkowców</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/plots">Tabela działek</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/fees">Tabela opłat</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/payments">Status płatności</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/annoucements">Ogłoszenia</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/surveys">Ankiety</Link>
                    </li>
                </ul>
            </section>
        </article>
    );
}
