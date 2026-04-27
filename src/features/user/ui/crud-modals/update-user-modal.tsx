'use client';

import { useState } from 'react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/portal';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { updateUser } from '@/features/user/domain/actions/update-user-action';
import { UserTableRow } from '@/features/user/domain/user-read-models';
import { UpdateUserData } from '@/features/user/domain/user-api-contracts';

import { EditUserForm } from '@/features/user/ui/crud-forms/edit-user-form';
import { CRUDModal } from '@/components/crud-modal';

interface Props {
    user: UserTableRow;
    plotOptions: PlotMinimalReference[];
    onCloseModal: () => void;
    onUpdatedUser: (updatedUserRow: UpdateUserData) => void;
}

export function UpdateUserModal({ user, plotOptions, onCloseModal, onUpdatedUser }: Props) {
    const [result, setResult] = useState<ActionResult<UpdateUserData> | TechnicalError | null>(
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
            <CRUDModal
                ariaLabel="Okno edytowania konta działkowca"
                titleCloseButton="Zamknij okno"
                resetResult={() => setResult(null)}
                onCloseModal={onCloseModal}
            >
                <EditUserForm
                    userData={user}
                    plotsOptions={plotOptions}
                    onSubmit={handleSubmit}
                    loading={loading}
                    errorMsg={errorMsg}
                />
            </CRUDModal>
        </Portal>
    );
}
