'use client';

import { Role } from '@prisma/client';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

import { getRoleLabel } from '@/utils/get-role-label';
import { Ban, CirclePlus } from 'lucide-react';
import { PlotOption } from './create-user-form';
import MultiSelectDropdown from '@/components/multi-select-plots-dropdown';

interface Props {
    plots: PlotOption[];
    loading: boolean;
    errorMsg: string | null;
}

export default function CreateUserFields({ plots, loading, errorMsg }: Props) {
    const roles = Object.values(Role).filter((r) => r !== Role.ADMIN);
    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <h3 className="col-span-4 text-center">Wypełnij poniższe dane</h3>

            {/* Name  */}
            <label className="col-span-1 flex items-center justify-end text-base">*Osoba:</label>
            <input
                type="text"
                name="name"
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Role  */}
            <label className="col-span-1 flex items-center justify-end text-base">*Rola:</label>
            <select
                name="role"
                defaultValue={Role.ALLOTMENT_GARDENER}
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm hover:cursor-pointer focus:outline-none sm:w-3/4"
            >
                {roles.map((role) => (
                    <option key={role} value={role}>
                        {getRoleLabel(role)}
                    </option>
                ))}
            </select>

            {/* Plot  */}
            <label className="col-span-1 flex items-center justify-end text-base">Działka:</label>
            <MultiSelectDropdown
                name="plotIds"
                options={plots.map((p) => ({
                    id: p.id,
                    label: `${p.plotNumber}`,
                }))}
            />

            {/* Info */}
            <span className="col-span-4 text-center text-sm">* wymagane pola.</span>

            {/* Error  */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.DASHBOARD_USERS.path}
                    title="Anuluj dodawanie konta"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>

                <button
                    type="submit"
                    title="Dodaj nowe konto"
                    disabled={loading}
                    className="btn btn-sm btn-theme"
                >
                    Dodaj <CirclePlus />
                </button>
            </div>
        </fieldset>
    );
}
