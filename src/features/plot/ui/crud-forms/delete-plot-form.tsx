'use client';

import { CustomButton } from '@/components/custom-button';
import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCloseModal: () => void;
    plotData: PlotTableRow;
    loading: boolean;
    errorMsg: string | null;
}

export function DeletePlotForm({ onSubmit, onCloseModal, plotData, loading, errorMsg }: Props) {
    return (
        <form onSubmit={onSubmit} aria-labelledby="delete-user-form-heading">
            <input type="hidden" name="id" value={plotData.id}></input>
            <div className="flex flex-row items-center justify-evenly gap-4 sm:gap-0">
                <CustomButton type="submit" disabled={loading} size="md" variant="danger">
                    Usuń działkę
                </CustomButton>
                <CustomButton type="button" onClick={onCloseModal} size="md" variant="outline">
                    Anuluj
                </CustomButton>
            </div>
        </form>
    );
}
