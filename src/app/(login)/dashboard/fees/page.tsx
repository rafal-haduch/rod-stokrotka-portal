import { ROUTES } from '@/constants/routes';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardFeesPage() {
    return (
        <article>
            <section>
                <h2>Tabela opłat</h2>
                <Link
                    href={ROUTES.DASHBOARD_CREATE_FEES.path}
                    className="btn btn-icon btn-theme mx-auto mb-4"
                    title="Dodaj nową opłatę"
                >
                    <Plus />
                </Link>
                <table className="w-full text-xs md:text-sm lg:text-lg">
                    <thead>
                        <tr>
                            <th>Rok</th>
                            <th>Działka</th>
                            <th>Status</th>
                            <th>Pełna kwota</th>
                            <th>Powierzchnia</th>
                            <th>Nieczystości</th>
                            <th>Składka</th>
                            <th>Energia</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
        </article>
    );
}
