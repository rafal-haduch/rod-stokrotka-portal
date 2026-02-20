'use client';

import { Role } from '@prisma/client';
import { CirclePlus, Save, X } from 'lucide-react';

import { getRoleLabel } from '@/domain/user/user.helpers';
import { ASSIGNABLE_ROLES } from '@/domain/user/user.constants';
import { PlotOption } from '@/domain/plot/plot.read-models';

import { TooltipIcon } from '@/components/tooltip-icon';
import { MultiSelectDropdown } from '@/components/multi-select-plots-dropdown';
import { UserTableRow, UserUpdateFormReadModel } from '@/domain/user/user.read-models';

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCloseModal: () => void;
    userData: UserTableRow;
    plotsOptions: PlotOption[];
    loading: boolean;
    errorMsg: string | null;
}

export default function EditUserForm({
    onSubmit,
    onCloseModal,
    userData,
    plotsOptions,
    loading,
    errorMsg,
}: Props) {
    return (
        <>
            <button
                type="button"
                onClick={onCloseModal}
                title="Zamknij okno edycji danych konta działkowca"
                className="ml-auto flex p-2 hover:cursor-pointer"
            >
                <X className="h-8 w-8" />
            </button>
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
                                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
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
                        <select
                            name="role"
                            defaultValue={userData.role}
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 w-3/4 rounded-md border px-3 py-2 shadow-sm hover:cursor-pointer focus:outline-none sm:w-3/4"
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
                                initialSelectedIds={userData.plots?.map((plot) => {
                                    return plot.id;
                                })}
                            />
                        </div>
                    </div>

                    {/* Error  */}
                    <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                        {errorMsg && <span className="text-red-500">{errorMsg}</span>}
                    </div>

                    {/* Buttons */}
                    <div className="col-span-4 flex justify-center gap-14">
                        <button
                            title="Zapisz nowe dane"
                            disabled={loading}
                            className="btn btn-sm btn-theme"
                        >
                            Zapisz <Save aria-hidden="true" />
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
