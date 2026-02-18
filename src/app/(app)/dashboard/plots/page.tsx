import Link from 'next/link';
import { Pencil, Plus, Trash2 } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import { formatPlotCode } from '@/utils/format-plot-code';
import { plotRepository } from '@/domain/plot/plot.repository';
import { mapPlotsToPlotTableRows } from '@/domain/plot/plot.mapper';

export default async function DashboardPlotsPage() {
    const plots = await plotRepository.findManyWithOwners();

    const plotTableRows = mapPlotsToPlotTableRows(plots).sort((a, b) =>
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
                    {plotTableRows.map((row) => (
                        <tr key={row.id} className="hover:bg-theme-bg-secondary">
                            <td>{row.plotNumber}</td>
                            <td>{formatPlotCode(row.plotNumber)}</td>
                            <td>{row.area !== null && row.area !== undefined ? row.area : '—'}</td>
                            <td>{row.ownersNames.length > 0 ? row.ownersNames.join(', ') : '—'}</td>
                            <td className="px-4 align-middle">
                                <Link
                                    href={`/dashboard/plots/${row.id}/update`}
                                    title="Edytuj dane działki"
                                    className="btn btn-primary btn-in-table"
                                >
                                    <Pencil />
                                </Link>
                            </td>
                            <td className="px-4 align-middle">
                                <Link
                                    href={`/dashboard/plots/${row.id}/delete`}
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
