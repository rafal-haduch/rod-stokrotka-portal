'use client';

import { Role } from '@prisma/client';
import { CirclePlus, X } from 'lucide-react';

import { TooltipIcon } from '@/components/tooltip-icon';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';
import { CustomButton } from '@/components/custom-button';

import { PlotOption } from '@/features/plot/plot.read-models';

import { getRoleLabel } from '../../domain/user.helpers';
import { ASSIGNABLE_ROLES } from '../../domain/user.constants';

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    plotsOptions: PlotOption[];
    loading: boolean;
    errorMsg: string | null;
}

export default function CreateUserForm({ onSubmit, plotsOptions, loading, errorMsg }: Props) {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby="create-user-form-heading"
            className="px-2 pb-6 sm:px-6"
        >
            <p id="create-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Stwórz nowe konto działkowca
            </p>
            <fieldset className="flex flex-col gap-3">
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
                        defaultValue={Role.ALLOTMENT_GARDENER}
                        className="input-form w-3/4"
                    >
                        {ASSIGNABLE_ROLES.map((role) => (
                            <option key={role} value={role}>
                                {getRoleLabel(role)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Plot  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">Działka:</label>
                    <div className="flex w-3/4">
                        <MultiSelectDropdown
                            name="plotIds"
                            options={plotsOptions.map((p) => ({
                                id: p.id,
                                label: `${p.plotNumber}`,
                            }))}
                            className="input-form"
                        />
                    </div>
                </div>

                {/* Info */}
                <p className="col-span-4 text-center text-sm">* wymagane pola.</p>

                {/* Error  */}
                <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                    {errorMsg && <span className="text-red-500">{errorMsg}</span>}
                </div>

                {/* Buttons */}
                <div className="col-span-4 flex justify-center gap-14">
                    <CustomButton
                        type="submit"
                        title="Dodaj nowe konto"
                        disabled={loading}
                        size="sm"
                        variant="primary"
                    >
                        Dodaj <CirclePlus />
                    </CustomButton>
                </div>
            </fieldset>
        </form>
    );
}
