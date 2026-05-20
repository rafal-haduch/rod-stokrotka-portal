'use client';

import { UserRole } from '@prisma/client';
import { CirclePlus } from 'lucide-react';

import { ComponentWithPlotOptionsProps } from '@/shared/models/plot-options-props';

import { CustomButton } from '@/components/custom-button';
import { TooltipIcon } from '@/components/tooltip-icon';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';

import { ASSIGNABLE_USER_ROLES } from '@/features/user/domain/user-constants';
import { getUserRoleLabel } from '@/features/user/domain/user-helpers';

interface Props extends ComponentWithPlotOptionsProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    errorMsg: string | null;
}

export function CreateUserForm({ plotOptions, onSubmit, loading, errorMsg }: Props) {
    return (
        <form onSubmit={onSubmit} aria-labelledby="create-user-form-heading" className="w-full">
            <p id="create-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Stwórz nowe konto działkowca
            </p>
            <fieldset className="flex w-full flex-col gap-3">
                <legend className="sr-only">Dane nowego konta działkowca</legend>
                {/* Grid wrapper dla wszystkich wierszy label + input */}
                <div className="grid w-full grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-3">
                    {/* Name */}
                    <label htmlFor="name" className="justify-self-end text-base">
                        <span aria-hidden="true">*</span>
                        <span className="sr-only">(wymagane)</span>
                        Osoba:
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className="input-form w-full"
                        />
                        <div className="absolute top-1/2 right-0 z-50 flex h-full w-auto -translate-y-1/2 items-center justify-center px-1">
                            <TooltipIcon
                                helperText="Dopuszczalna forma zapisu to imię + pierwsza litera nazwiska."
                                example={'osoba -> Jan Kowalski \nzapis -> Jan K.'}
                            />
                        </div>
                    </div>

                    {/* Role */}
                    <label htmlFor="role" className="justify-self-end text-base">
                        *Rola:
                    </label>
                    <select
                        id="role"
                        name="role"
                        defaultValue={UserRole.ALLOTMENT_GARDENER}
                        className="input-form w-full"
                    >
                        {ASSIGNABLE_USER_ROLES.map((role) => (
                            <option key={role} value={role}>
                                {getUserRoleLabel(role)}
                            </option>
                        ))}
                    </select>

                    {/* Sekcja "Działki" — pełna szerokość */}
                    <div className="col-span-2 pt-1 text-center font-semibold">Działki:</div>

                    {/* Owned Plots */}
                    <label htmlFor="ownedPlots" className="justify-self-end text-base">
                        Posiada:
                    </label>
                    <MultiSelectDropdown
                        id="ownedPlots"
                        name="ownedPlotIds"
                        options={plotOptions.map((p) => ({
                            id: p.id,
                            label: `${p.number}`,
                        }))}
                        className="input-form w-full"
                    />

                    {/* Coowned Plots */}
                    <label htmlFor="coOwnedPlots" className="justify-self-end text-base">
                        Współposiada:
                    </label>
                    <MultiSelectDropdown
                        id="coOwnedPlots"
                        name="coOwnedPlotIds"
                        options={plotOptions.map((p) => ({
                            id: p.id,
                            label: `${p.number}`,
                        }))}
                        className="input-form w-full"
                    />

                    {/* Used Plots */}
                    <label htmlFor="usedPlots" className="justify-self-end text-base">
                        Współużytkuje:
                    </label>
                    <MultiSelectDropdown
                        id="usedPlots"
                        name="usedPlotIds"
                        options={plotOptions.map((p) => ({
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
                        Dodaj <CirclePlus aria-hidden="true" />
                    </CustomButton>
                </div>
            </fieldset>
        </form>
    );
}
