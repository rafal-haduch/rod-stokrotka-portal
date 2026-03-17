'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/portal';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { updateUser } from '@/features/user/domain/actions/update-user-action';
import { UserTableRow } from '@/features/user/domain/user-read-models';
import { UpdateUserResult } from '@/features/user/domain/user-api-contracts';

import { EditUserForm } from '@/features/user/ui/crud-forms/edit-user-form';

interface Props {
    user: UserTableRow;
    plotOptions: PlotMinimalReference[];
    onCloseModal: () => void;
    onUpdatedUser: (updatedUserRow: UserTableRow) => void;
}

export  function EditUserModal({ user, plotOptions, onCloseModal, onUpdatedUser }: Props) {
    const [result, setResult] = useState<ActionResult<UpdateUserResult> | TechnicalError | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => updateUser(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onUpdatedUser(res.data);
        }

        setLoading(false);
    }

    const errorMsg =
        result === TECHNICAL_ERROR
            ? SYSTEM_MESSAGES.TECHNICAL_ERROR
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno dodawania nowego konta działkowca"
                    className="panel surface-elevated mx-auto max-w-xl"
                >
                    <button
                        type="button"
                        onClick={onCloseModal}
                        title="Zamknij okno edycji danych konta działkowca"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <EditUserForm
                        userData={user}
                        plotsOptions={plotOptions}
                        onSubmit={handleSubmit}
                        loading={loading}
                        errorMsg={errorMsg}
                    />
                </div>
            </div>
        </Portal>
    );
}
