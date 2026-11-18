'use client';

import { Save } from 'lucide-react';

import { TooltipIcon } from '@/components/tooltip-icon';
import { CustomButton } from '@/components/custom-button';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import { ASSIGNABLE_USER_ROLES } from '@/features/user/domain/user-constants';
import { getUserRoleLabel } from '@/features/user/domain/user-helpers';

interface Props {
    userData: UserTableRow;
    plotsOptions: PlotMinimalReference[];
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    errorMsg: string | null;
}

export function EditUserForm({ userData, plotsOptions, onSubmit, loading, errorMsg }: Props) {
    return (
        <form onSubmit={onSubmit} aria-labelledby="update-user-form-heading" className="w-full">
            <p id="update-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Edytuj dane konta działkowca
            </p>
            <fieldset className="flex w-full flex-col gap-3">
                {/* Grid wrapper dla wszystkich wierszy label + input */}
                <div className="grid w-full grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-3">
                    {/* ID (hidden) */}
                    <div className="hidden">
                        <label className="justify-self-end text-base">ID:</label>
                        <input
                            type="text"
                            name="id"
                            required
                            className="input-form w-full"
                            defaultValue={userData.id}
                        />
                    </div>

                    {/* Name */}
                    <label className="justify-self-end text-base">*Osoba:</label>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            required
                            className="input-form w-full"
                            defaultValue={userData.name}
                        />
                        <div className="absolute top-1/2 right-0 z-50 flex h-full w-auto -translate-y-1/2 items-center justify-center px-1">
                            <TooltipIcon
                                helperText="Dopuszczalna forma zapisu to imię + pierwsza litera nazwiska."
                                example={'osoba -> Jan Kowalski \nzapis -> Jan K.'}
                            />
                        </div>
                    </div>

                    {/* Role */}
                    <label className="justify-self-end text-base">*Rola:</label>
                    <select name="role" defaultValue={userData.role} className="input-form w-full">
                        {ASSIGNABLE_USER_ROLES.map((role) => (
                            <option key={role} value={role}>
                                {getUserRoleLabel(role)}
                            </option>
                        ))}
                    </select>

                    {/* Sekcja "Działki" — pełna szerokość */}
                    <div className="col-span-2 pt-1 text-center font-semibold">Działki:</div>

                    {/* Owned Plots */}
                    <label className="justify-self-end text-base">Posiada:</label>
                    <MultiSelectDropdown
                        id="ownedPlotIds"
                        name="ownedPlotIds"
                        initialSelectedIds={userData.ownedPlots.map((plot) => plot.id)}
                        options={plotsOptions.map((p) => ({
                            id: p.id,
                            label: `${p.number}`,
                        }))}
                        className="input-form w-full"
                    />

                    {/* Coowned Plots */}
                    <label className="justify-self-end text-base">Współposiada:</label>
                    <MultiSelectDropdown
                        id="coOwnedPlotIds"
                        name="coOwnedPlotIds"
                        initialSelectedIds={userData.coOwnedPlots.map((plot) => plot.id)}
                        options={plotsOptions.map((p) => ({
                            id: p.id,
                            label: `${p.number}`,
                        }))}
                        className="input-form w-full"
                    />

                    {/* Used Plots */}
                    <label className="justify-self-end text-base">Współużytkuje:</label>
                    <MultiSelectDropdown
                        id="usedPlotIds"
                        name="usedPlotIds"
                        initialSelectedIds={userData.usedPlots.map((plot) => plot.id)}
                        options={plotsOptions.map((p) => ({
                            id: p.id,
                            label: `${p.number}`,
                        }))}
                        className="input-form w-full"
                    />
                </div>

                {/* Info */}
                <p className="text-center text-sm">* wymagane pola.</p>

                {/* Error */}
                <div className="min-h-10 text-center sm:min-h-4">
                    {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                    <CustomButton
                        type="submit"
                        title="Dodaj nowe konto"
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
