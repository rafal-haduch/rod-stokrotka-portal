'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

import { CRUDModalType } from '@/shared/types/crud-modal';

import { CustomButton } from '@/components/ui/custom-button';

import {
    CreatePlotData,
    DeletePlotData,
    UpdatePlotData,
} from '@/features/plot/domain/plot-api-contracts';
import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

import { CreatePlotModal } from '@/features/plot/ui/crud-modals/create-plot-modal';
import { DeletePlotModal } from '@/features/plot/ui/crud-modals/delete-plot-modal';
import { EditPlotModal } from '@/features/plot/ui/crud-modals/edit-plot-modal';
import { PlotsTable } from '@/features/plot/ui/plots-table';

interface Props {
    plotTableRows: PlotTableRow[];
}

export function CMSPlotsView({ plotTableRows }: Props) {
    //NOTE: Copy user table rows into state for local update after server action mutation.
    const [plotRows, setPlotRows] = useState<PlotTableRow[]>(plotTableRows);
    const [activeModal, setActiveModal] = useState<CRUDModalType>(null);
    const [selectedPlot, setSelectedPlot] = useState<PlotTableRow | null>(null);

    const openModal = (type: CRUDModalType, plot?: PlotTableRow) => {
        setSelectedPlot(plot ?? null);
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedPlot(null);
    };

    const addPlotInTable = (createdPlot: CreatePlotData) => {
        const newPlot: PlotTableRow = {
            id: createdPlot.id,
            number: createdPlot.number,
            area: createdPlot.area,
        };

        setPlotRows((prev) => [newPlot, ...prev]);
    };

    const updatePlotInTable = (updatedPlot: UpdatePlotData) => {
        const editedPlot: PlotTableRow = {
            id: updatedPlot.id,
            number: updatedPlot.number,
            area: updatedPlot.area,
        };

        setPlotRows((prev) => prev.map((p) => (p.id === updatedPlot.id ? editedPlot : p)));
    };

    const removePlotFromTable = (plotId: number) => {
        setPlotRows((prev) => prev.filter((p) => p.id !== plotId));
    };

    return (
        <section>
            <h1 className="h2">Tabela działek</h1>

            <CustomButton
                type="button"
                title="Dodaj nowe konto"
                onClick={() => openModal('create')}
                context="iconSquare"
                variant="action"
                className="mx-auto mb-4"
            >
                <Plus aria-hidden="true" />
            </CustomButton>

            <PlotsTable data={plotRows} onEdit={openModal} onDelete={openModal} />

            {activeModal === 'create' && (
                <CreatePlotModal
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onPlotCreated={(createdPlot: CreatePlotData) => {
                        closeModal();
                        addPlotInTable(createdPlot);
                    }}
                />
            )}

            {activeModal === 'update' && selectedPlot && (
                <EditPlotModal
                    plot={selectedPlot}
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onPlotUpdated={(updatedPlot: UpdatePlotData) => {
                        closeModal();
                        updatePlotInTable(updatedPlot);
                    }}
                />
            )}

            {activeModal === 'delete' && selectedPlot && (
                <DeletePlotModal
                    plot={selectedPlot}
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onPlotDeleted={(deletedPlot: DeletePlotData) => {
                        closeModal();
                        removePlotFromTable(deletedPlot.id);
                    }}
                />
            )}
        </section>
    );
}
