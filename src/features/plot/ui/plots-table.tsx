'use client';

import { Pencil, Trash2 } from 'lucide-react';

import { CRUDModalType } from '@/shared/types/crud-modal';
import { formatPlotCode } from '@/shared/utils/format-plot-code';

import { CustomButton } from '@/components/custom-button';

import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

interface Props {
    data: PlotTableRow[];
    onEdit: (type: CRUDModalType, user: PlotTableRow) => void;
    onDelete: (type: CRUDModalType, user: PlotTableRow) => void;
}

export function PlotsTable({ data, onEdit, onDelete }: Props) {
    return (
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
                {data.map((rowPlot) => (
                    <tr key={rowPlot.id} className="hover:bg-theme-bg-secondary">
                        <td>{rowPlot.number}</td>
                        <td>{formatPlotCode(rowPlot.number)}</td>
                        <td>
                            {rowPlot.area !== null && rowPlot.area !== undefined
                                ? rowPlot.area
                                : '—'}
                        </td>
                        <td>{rowPlot.ownerName.length > 0 ? rowPlot.ownerName.join(', ') : '—'}</td>
                        <td className="px-4 align-middle">
                            <CustomButton
                                type="button"
                                title="Edytuj dane działki"
                                onClick={() => onEdit('edit', rowPlot)}
                                context="table"
                                variant="action"
                            >
                                <Pencil aria-hidden="true" />
                            </CustomButton>
                        </td>
                        <td className="px-4 align-middle">
                            <CustomButton
                                type="button"
                                title="Usuń działkę"
                                onClick={() => onDelete('delete', rowPlot)}
                                context="table"
                                variant="danger"
                            >
                                <Trash2 aria-hidden="true" />
                            </CustomButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
