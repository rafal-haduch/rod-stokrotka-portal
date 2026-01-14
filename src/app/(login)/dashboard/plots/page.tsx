import { ROUTES } from '@/constants/routes';
import { prisma } from '@/lib/prisma';
import { formatPlotCode } from '@/utils/format-plot-code';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPlotsPage() {
    const plots = (
        await prisma.plot.findMany({
            include: {
                ownersId: {
                    include: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        })
    ).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );

    return (
        <section>
            <h2>Tabela działek</h2>

            <Link
                href={ROUTES.DASHBOARD_CREATE_PLOT.path}
                className="btn btn-icon btn-theme mx-auto mb-4"
                title="Dodaj nową działkę"
            >
                <Plus />
            </Link>
            {/*TODO: dac do komponentu*/}
            <table className="w-full text-xs md:text-sm lg:text-lg">
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Kod</th>
                        <th>Powierzchnia</th>
                        <th>Użytkuje</th>
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {plots.map((plot) => (
                        <tr key={plot.id} className="hover:bg-theme-bg-secondary">
                            <td>{plot.plotNumber}</td>
                            <td>{formatPlotCode(plot.plotNumber)}</td>
                            <td>
                                {plot.area !== null && plot.area !== undefined ? plot.area : '—'}
                            </td>
                            <td>
                                {plot.ownersId.length > 0
                                    ? plot.ownersId.map((p) => p.user.name).join(', ')
                                    : '—'}
                            </td>
                            <td className="px-4 align-middle">
                                <Link
                                    href={`/dashboard/plots/${plot.id}/update`}
                                    title="Edytuj dane działki"
                                    className="btn btn-primary btn-in-table"
                                >
                                    <Pencil />
                                </Link>
                            </td>
                            <td className="px-4 align-middle">
                                <Link
                                    href={`/dashboard/plots/${plot.id}/delete`}
                                    title="Usuń działkę z systemu"
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
