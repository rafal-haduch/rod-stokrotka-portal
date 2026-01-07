import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Ban, Trash2 } from 'lucide-react';
import { DeletePlotFormProps } from './DeletePlotForm';

interface Props {
    plot: DeletePlotFormProps;
    loading: boolean;
    errorMsg: string | null;
}

export default function DeletePlotFields({ plot, loading, errorMsg }: Props) {
    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <input type="hidden" name="id" value={plot.id} />
            <h3 className="col-span-4 text-center">Czy napewno chcesz usunąć tę dzialkę?</h3>

            {/* Plot number  */}
            <label className="col-span-1 flex items-center justify-end text-base">Numer:</label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                {plot.plotNumber}
            </label>

            {/* Area  */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Powierzchnia:
            </label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                {plot.area}
            </label>

            {/* Owner  */}
            <label className="col-span-1 flex items-center justify-end text-base">Użytkuje:</label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                -
            </label>

            {/* Info */}
            <strong className="col-span-4 text-center text-red-500">
                Uwaga, tej operacji nie będzie można cofnąć!
            </strong>

            {/* Error  */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.PLOTS_DASHBOARD.path}
                    title="Anuluj usuwanie działki"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>
                <button
                    title="Usuń dzialkę z systemu"
                    disabled={loading}
                    className="btn btn-sm btn-danger border-0"
                >
                    Usuń <Trash2 />
                </button>
            </div>
        </fieldset>
    );
}
