'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import Portal from '@/components/portal';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { ActionResult } from '@/shared/contracts/action-result';
import { safeAction } from '@/shared/utils/safe-action';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { updateUser } from '@/features/user/domain/actions/update-user-action';
import { UserTableRow } from '@/features/user/domain/user-read-models';
import { UpdatedUserData } from '@/features/user/domain/user-api-contracts';
import EditUserForm from '@/features/user/ui/forms/edit-user-form';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUpdatedUser: (updatedUserRow: UserTableRow) => void;
    plotOptions: PlotMinimalReference[];
}

export default function EditUserModal({ user, onCloseModal, onUpdatedUser, plotOptions }: Props) {
    const [result, setResult] = useState<ActionResult<UpdatedUserData> | TechnicalError | null>(
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
                        onSubmit={handleSubmit}
                        plotsOptions={plotOptions}
                        userData={user}
                        loading={loading}
                        errorMsg={errorMsg}
                    />
                </div>
            </div>
        </Portal>
    );
}
