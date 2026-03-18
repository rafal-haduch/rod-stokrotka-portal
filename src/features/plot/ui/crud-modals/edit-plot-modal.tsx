'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { ActionResult } from '@/shared/contracts/action-result';
import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/portal';

import { updatePlot } from '@/features/plot/domain/actions/update-plot-action';
import { UpdatePlotData } from '@/features/plot/domain/plot-api-contracts';
import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

import { EditPlotForm } from '@/features/plot/ui/crud-forms/edit-plot-form';

interface Props {
    plot: PlotTableRow;
    onCloseModal: () => void;
    onPlotUpdated: (updatedPlotRow: UpdatePlotData) => void;
}

export function EditPlotModal({ plot, onCloseModal, onPlotUpdated }: Props) {
    const [result, setResult] = useState<ActionResult<void> | TechnicalError | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => updatePlot(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onPlotUpdated(res.data);
        }

        setLoading(false);
    }

    const errorMsg =
        result === TECHNICAL_ERROR
            ? SYSTEM_MESSAGES.TECHNICAL_ERROR
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno dodawania nowego konta działkowca"
                    className="panel surface-elevated mx-auto max-w-xl"
                >
                    <button
                        type="button"
                        onClick={onCloseModal}
                        title="Zamknij okno edycji danych konta działkowca"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X aria-hidden="true" className="h-8 w-8" />
                    </button>

                    <EditPlotForm
                        plotData={plot}
                        onSubmit={handleSubmit}
                        loading={loading}
                        errorMsg={errorMsg}
                    />
                </div>
            </div>
        </Portal>
    );
}
