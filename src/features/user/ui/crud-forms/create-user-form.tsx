'use client';

import { UserRole } from '@prisma/client';
import { CirclePlus, X } from 'lucide-react';

import { ComponentPropsWithPlotOptions } from '@/shared/models/plot-options-props';

import { CustomButton } from '@/components/custom-button';
import { TooltipIcon } from '@/components/tooltip-icon';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';

import { ASSIGNABLE_USER_ROLES } from '@/features/user/domain/user-constants';
import { getUserRoleLabel } from '@/features/user/domain/user-helpers';

interface Props extends ComponentPropsWithPlotOptions {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    errorMsg: string | null;
}

export function CreateUserForm({
    availablePlotOptions,
    plotOptionsWithoutOwner,
    onSubmit,
    loading,
    errorMsg,
}: Props) {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby="create-user-form-heading"
            className="w-full px-2 pb-6 sm:px-6"
        >
            <p id="create-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Stwórz nowe konto działkowca
            </p>
            <fieldset className="flex w-full flex-col gap-3">
                {/* Name  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">*Osoba:</label>
                    <div className="relative w-3/4">
                        <input type="text" name="name" required className="input-form" />
                        <div className="absolute top-1/2 right-0 z-50 flex h-full w-auto -translate-y-1/2 items-center justify-center px-1">
                            <TooltipIcon
                                helperText={
                                    'Dopuszczalna forma zapisu to imię + pierwsza litera nazwiska.'
                                }
                                example={'osoba -> Jan Kowalski \nzapis -> Jan K.'}
                            />
                        </div>
                    </div>
                </div>

                {/* Role  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">*Rola:</label>
                    <select
                        name="role"
                        defaultValue={UserRole.ALLOTMENT_GARDENER}
                        className="input-form w-3/4"
                    >
                        {ASSIGNABLE_USER_ROLES.map((role) => (
                            <option key={role} value={role}>
                                {getUserRoleLabel(role)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full gap-4">
                    <p className="text-center font-semibold">Działki:</p>
                </div>

                {/* Owned Plots  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">Posiada:</label>
                    <div className="w-3/4">
                        <MultiSelectDropdown
                            name="ownedPlotIds"
                            options={plotOptionsWithoutOwner.map((p) => ({
                                id: p.id,
                                label: `${p.number}`,
                            }))}
                            className="input-form"
                        />
                    </div>
                </div>

                {/* Coowned Plots */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">Współposiada:</label>
                    <div className="w-3/4">
                        <MultiSelectDropdown
                            name="coOwnedPlotIds"
                            options={availablePlotOptions.map((p) => ({
                                id: p.id,
                                label: `${p.number}`,
                            }))}
                            className="input-form"
                        />
                    </div>
                </div>

                {/* Used Plots  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">Współużytkuje:</label>
                    <div className="w-3/4">
                        <MultiSelectDropdown
                            name="usedPlotIds"
                            options={availablePlotOptions.map((p) => ({
                                id: p.id,
                                label: `${p.number}`,
                            }))}
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
                <div className="col-span-4 flex justify-center gap-14">
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
