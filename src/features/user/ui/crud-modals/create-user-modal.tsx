'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';
import { ComponentPropsWithPlotOptions } from '@/shared/models/plot-options-props';

import { Portal } from '@/components/portal';

import { createUser } from '@/features/user/domain/actions/create-user-action';
import { CreateUserData } from '@/features/user/domain/user-api-contracts';

import { CreateUserForm } from '@/features/user/ui/crud-forms/create-user-form';
import { CreateUserSuccess } from '@/features/user/ui/crud-modals/create-user-success';

interface Props extends ComponentPropsWithPlotOptions {
    onCloseModal: () => void;
    onUserCreated: (newUserData: CreateUserData) => void;
}

export function CreateUserModal({
    availablePlotOptions,
    plotOptionsWithoutOwner,
    onCloseModal,
    onUserCreated,
}: Props) {
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno dodawania nowego konta działkowca"
                    className="panel surface-elevated mx-auto w-fit max-w-3xl rounded-xl shadow-lg"
                >
                    <button
                        type="button"
                        onClick={() => {
                            setResult(null);
                            onCloseModal();
                        }}
                        title="Zamknij okno dodawania nowego działkowca"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    {result !== TECHNICAL_ERROR && result?.success && result.data ? (
                        <CreateUserSuccess result={result.data} />
                    ) : (
                        <CreateUserForm
                            onSubmit={handleSubmit}
                            availablePlotOptions={availablePlotOptions}
                            plotOptionsWithoutOwner={plotOptionsWithoutOwner}
                            loading={loading}
                            errorMsg={errorMsg}
                        />
                    )}
                </div>
            </div>
        </Portal>
    );
}
