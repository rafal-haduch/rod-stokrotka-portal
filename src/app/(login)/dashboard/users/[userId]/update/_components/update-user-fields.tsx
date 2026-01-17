import Link from 'next/link';
import { Ban, Save } from 'lucide-react';
import { Role } from '@prisma/client';

import { ROUTES } from '@/constants/routes';

import { getRoleLabel } from '@/utils/get-role-label';

import MultiSelectDropdown from '@/components/multi-select-plots-dropdown';
import { UserUpdateFormReadModel } from '@/domain/user/user.read-models';
import { PlotOption } from '@/domain/shared/get-sorted-plots-list-from-db';

//REVIEW: import PlotOption czy nei zmienic jego miejsca?
interface Props {
    user: UserUpdateFormReadModel;
    plotsOptions: PlotOption[];
    loading: boolean;
    errorMsg: string | null;
}

export default function UpdateUserFields({ user, plotsOptions, loading, errorMsg }: Props) {
    //TODO: hide admin role if role != admin
    const roles = Object.values(Role); //.filter((r) => r !== Role.ADMIN);

    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <input type="hidden" name="id" value={user.id} />
            <h3 className="col-span-4 text-center">Dane możliwe do zmiany:</h3>

            {/* Name  */}
            <label className="col-span-1 flex items-center justify-end text-base">Osoba:</label>
            <input
                type="text"
                name="name"
                defaultValue={user.name}
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Role  */}
            <label className="col-span-1 flex items-center justify-end text-base">Rola:</label>
            <select
                name="role"
                defaultValue={user.role}
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
                options={plotsOptions.map((p) => ({
                    id: p.id,
                    label: `${p.plotNumber}`,
                }))}
                initialSelectedIds={user.plots.map((plot) => plot.plotId)}
            />

            {/* Error  */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.DASHBOARD_USERS.path}
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
