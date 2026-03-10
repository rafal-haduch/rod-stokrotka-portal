'use client';

import Link from 'next/link';
import { ArrowBigLeft, CirclePlus } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

import { CreatePlotSuccess as CreatePlotSuccessType } from '@/shared/contracts/plot-actions';

interface Props {
    result: CreatePlotSuccessType;
    onReset: () => void;
}

export default function CreatePlotSuccess({ result, onReset }: Props) {
    return (
        <>
            <h3 className="text-center text-green-500">Dzialka zostala dodana</h3>

            <fieldset className="mb-4 grid grid-cols-4 space-x-2 gap-y-3">
                <label className="col-span-1 flex items-center justify-end text-base">Numer:</label>
                <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                    {result.data.plotNumber}
                </label>

                <label className="col-span-1 flex items-center justify-end text-base">
                    Powierzchnia:
                </label>
                <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                    {result.data.area !== null && result.data.area !== undefined
                        ? result.data.area
                        : '—'}
                </label>
            </fieldset>

            <div className="flex items-center justify-center gap-2 sm:gap-10">
                <Link
                    href={ROUTES.CMS_PLOTS.path}
                    title="Wróć do tabeli dzialek"
                    className="btn btn-sm btn-theme"
                >
                    <ArrowBigLeft /> Wróć do tabeli
                </Link>
                <button
                    type="button"
                    onClick={onReset}
                    title="Dodaj kolejną nową dzialkę"
                    className="btn btn-sm btn-theme"
                >
                    Dodaj kolejną <CirclePlus />
                </button>
            </div>
        </>
    );
}
