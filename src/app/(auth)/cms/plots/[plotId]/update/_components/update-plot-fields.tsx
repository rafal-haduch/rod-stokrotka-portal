import Link from 'next/link';
import { Ban, Save } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

import { PlotUpdateFormReadModel } from '@/features/plot/plot.read-models';

interface Props {
    plot: PlotUpdateFormReadModel;
    loading: boolean;
    errorMsg: string | null;
}

export default function UpdatePlotFields({ plot, loading, errorMsg }: Props) {
    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <input type="hidden" name="id" value={plot.id} />

            <h3 className="col-span-4 text-center">Dane możliwe do zmiany:</h3>

            {/* Plot number */}
            <label className="col-span-1 flex items-center justify-end text-base">*Numer:</label>
            <input
                type="text"
                name="plotNumber"
                defaultValue={plot.plotNumber}
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Area */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Powierzchnia:
            </label>
            <input
                type="text"
                name="area"
                defaultValue={plot.area !== null && plot.area !== undefined ? plot.area : ''}
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Info */}
            <span className="col-span-4 text-center text-sm">* wymagane pola.</span>

            {/* Error */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.CMS_PLOTS.path}
                    title="Anuluj zmianę danych"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>
                <button
                    title="Zapisz nowe dane"
                    disabled={loading}
                    className="btn btn-sm btn-theme"
                >
                    Zapisz <Save />
                </button>
            </div>
        </fieldset>
    );
}
