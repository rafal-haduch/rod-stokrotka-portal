'use client';

import { useState } from 'react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';
import { ComponentWithPlotOptionsProps } from '@/shared/models/plot-options-props';

import { Portal } from '@/components/portal';

import { createUser } from '@/features/user/domain/actions/create-user-action';
import { CreateUserData } from '@/features/user/domain/user-api-contracts';

import { CreateUserForm } from '@/features/user/ui/crud-forms/create-user-form';
import { CreateUserSuccess } from '@/features/user/ui/crud-views/create-user-success';
import { CRUDModal } from '@/components/crud-modal';

interface Props extends ComponentWithPlotOptionsProps {
    onCloseModal: () => void;
    onUserCreated: (newUserData: CreateUserData) => void;
}

export function CreateUserModal({ plotOptions, onCloseModal, onUserCreated }: Props) {
    const [result, setResult] = useState<ActionResult<CreateUserData> | TechnicalError | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => createUser(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onUserCreated(res.data);
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
                ariaLabel="Okno tworzenia nowego konta dla działkowca"
                titleCloseButton="Zamknij okno"
                resetResult={() => setResult(null)}
                onCloseModal={onCloseModal}
            >
                {result !== TECHNICAL_ERROR && result?.success && result.data ? (
                    <CreateUserSuccess result={result.data} />
                ) : (
                    <CreateUserForm
                        onSubmit={handleSubmit}
                        plotOptions={plotOptions}
                        loading={loading}
                        errorMsg={errorMsg}
                    />
                )}
            </CRUDModal>
        </Portal>
    );
}
