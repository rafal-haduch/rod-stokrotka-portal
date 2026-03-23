'use client';

import { Save } from 'lucide-react';

import { CustomButton } from '@/components/custom-button';

import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

interface Props {
    plotData: PlotTableRow;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    errorMsg: string | null;
}

export function EditPlotForm({ plotData, onSubmit, loading, errorMsg }: Props) {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby="edit-plot-form-heading"
            className="px-2 pb-6 sm:px-6"
        >
            <p id="edit-plot-form-heading" className="mb-4 text-center text-xl font-semibold">
                Zmień dane działki:
            </p>

            <fieldset className="flex flex-col gap-3">
                <input type="hidden" name="id" value={plotData.id} />

                {/* Plot number */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">*Numer:</label>
                    <div className="w-3/4">
                        <input
                            type="text"
                            name="plotNumber"
                            defaultValue={plotData.number}
                            required
                            className="input-form"
                        />
                    </div>
                </div>

                {/* Area */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">Powierzchnia:</label>
                    <div className="w-3/4">
                        <input
                            type="text"
                            name="area"
                            defaultValue={
                                plotData.area !== null && plotData.area !== undefined
                                    ? plotData.area
                                    : ''
                            }
                            className="input-form"
                        />
                    </div>
                </div>

                {/* Info */}
                <p className="col-span-4 text-center text-sm">* wymagane pola.</p>

                {/* Error  */}
                <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                    {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center gap-14">
                    <CustomButton
                        type="submit"
                        title="Zapisz nowe dane"
                        disabled={loading}
                        size="sm"
                        variant="primary"
                    >
                        Zapisz <Save aria-hidden="true" />
                    </CustomButton>
                </div>
            </fieldset>
        </form>
    );
}
