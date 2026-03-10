'use client';

import { Role } from '@prisma/client';
import Link from 'next/link';

import { ROUTES } from '@/shared/config/routes';

import { getRoleLabel } from '@/features/user/user.helpers';
import { Ban, CirclePlus } from 'lucide-react';

interface Props {
    loading: boolean;
    error: string | null;
}

export default function CreatePlotFields({ loading, error }: Props) {
    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <h3 className="col-span-4 text-center">Wypełnij poniższe dane:</h3>

            {/* Plot number */}
            <label className="col-span-1 flex items-center justify-end text-base">*Numer:</label>
            <input
                type="text"
                name="plotNumber"
                //required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Area */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Powierzchnia:
            </label>
            <input
                type="text"
                name="area"
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Info */}
            <span className="col-span-4 text-center text-sm">* wymagane pola.</span>

            {/* Error */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {error && <span className="text-red-500">{error}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.CMS_USERS.path}
                    title="Anuluj dodawanie dzialki"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>

                <button
                    type="submit"
                    title="Dodaj nową dzialkę"
                    disabled={loading}
                    className="btn btn-sm btn-theme"
                >
                    Dodaj <CirclePlus />
                </button>
            </div>
        </fieldset>
    );
}
