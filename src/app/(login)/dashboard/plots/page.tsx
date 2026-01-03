import { prisma } from '@/lib/prisma';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPlotsPage() {
    const plots = await prisma.plot.findMany();

    return (
        <article>
            <section>
                <h2>Tabela działek</h2>
                <Link
                    href="/dashboard/plots/create"
                    className="button-text mx-auto mb-4"
                    title="Dodaj nową działkę"
                >
                    <Plus />
                </Link>
                <table className="w-full text-xs md:text-sm lg:text-lg">
                    <thead>
                        <tr>
                            <th>Numer</th>
                            <th>ID</th>
                            <th>Powierzchnia</th>
                            <th>Użytkuje</th>
                            <th>Edytuj</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plots.map((plot) => (
                            <tr key={plot.id} className="hover:bg-theme-bg-secondary">
                                <th>{plot.number}</th>
                                <th>{plot.id}</th>
                                <th>{plot.area}</th>
                                <th>{plot.ownerId}</th>
                                <th className="px-4 align-middle">
                                    <Link
                                        href={`/dashboard/plots/${plot.id}/edit`}
                                        title="Edytuj działkę"
                                        className="flex items-center justify-center rounded-lg border bg-gray-100 text-sky-500 transition hover:cursor-pointer"
                                    >
                                        <Pencil />
                                    </Link>
                                </th>
                                <th className="px-4 align-middle">
                                    <Link
                                        href={`/dashboard/plots/${plot.id}/delete`}
                                        title="Usuń działkę"
                                        className="flex items-center justify-center rounded-lg border bg-gray-100 text-red-700 transition hover:cursor-pointer"
                                    >
                                        <Trash2 />
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
