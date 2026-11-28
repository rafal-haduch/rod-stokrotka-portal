'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/ui/portal';

import { deletePlot } from '@/features/plot/domain/actions/delete-plot-action';
import { DeletePlotData } from '@/features/plot/domain/plot-api-contracts';
import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

import { DeletePlotForm } from '@/features/plot/ui/crud-forms/delete-plot-form';

interface Props {
    plot: PlotTableRow;
    onCloseModal: () => void;
    onPlotDeleted: (deletedPlot: DeletePlotData) => void;
}

export function DeletePlotModal({ plot, onCloseModal, onPlotDeleted }: Props) {
    const [result, setResult] = useState<ActionResult<DeletePlotData> | TechnicalError | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => deletePlot(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onPlotDeleted(res.data);
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
                    aria-label="Okno usuwania działki"
                    className="panel surface-elevated mx-auto max-w-xl"
                >
                    <button
                        type="button"
                        onClick={onCloseModal}
                        title="Zamknij okno usuwania działki"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X aria-hidden="true" className="h-8 w-8" />
                    </button>

                    <div className="px-2 pb-6 sm:px-6">
                        {errorMsg ? (
                            <p className="text-center text-red-500">{errorMsg}</p>
                        ) : (
                            <>
                                <p
                                    id="delete-user-form-heading"
                                    className="text-theme-foreground-content mb-4 text-center"
                                >
                                    Czy na pewno chcesz usunąć działkę numer{' '}
                                    <strong className="whitespace-nowrap">{plot.number}</strong>
                                    ? <br /> Tę operację może cofnąć jedynie administrator strony!
                                </p>
                                <DeletePlotForm
                                    plotData={plot}
                                    onSubmit={handleSubmit}
                                    onCloseModal={onCloseModal}
                                    loading={loading}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
