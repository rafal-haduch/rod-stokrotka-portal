'use client';

import { Save, X } from 'lucide-react';

import { TooltipIcon } from '@/components/tooltip-icon';
import { CustomButton } from '@/components/custom-button';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import { ASSIGNABLE_ROLES } from '@/features/user/domain/user-constants';
import { getRoleLabel } from '@/features/user/domain/user-helpers';

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    userData: UserTableRow;
    plotsOptions: PlotMinimalReference[];
    loading: boolean;
    errorMsg: string | null;
}

export default function EditUserForm({
    onSubmit,
    userData,
    plotsOptions,
    loading,
    errorMsg,
}: Props) {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby="edit-user-form-heading"
            className="px-2 pb-6 sm:px-6"
        >
            <p id="edit-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Zmień dane konta działkowca:
            </p>
            <fieldset className="flex flex-col gap-3">
                {/* ID  */}
                <input type="hidden" name="id" value={userData.id} />

                {/* Name  */}
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-1/4 justify-end text-base">*Osoba:</label>
                    <div className="relative w-3/4">
                        <input
                            type="text"
                            name="name"
                            defaultValue={userData.name}
                            required
                            className="input-form"
                        />
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
                    <select name="role" defaultValue={userData.role} className="input-form w-3/4">
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
                            initialSelectedIds={userData.plots?.map((plot) => {
                                return plot.id;
                            })}
                            className="input-form w-full"
                        />
                    </div>
                </div>

                {/* Error  */}
                <p className="min-h-10 text-center sm:min-h-4">
                    {errorMsg && <span className="text-red-500">{errorMsg}</span>}
                </p>

                {/* Submit Button */}
                <div className="flex justify-center gap-14">
                    <CustomButton
                        type="submit"
                        title="Zapisz nowe dane"
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
