'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import Portal from '@/components/portal';

import { PlotMinimalReference } from '@/features/plot/plot.read-models';

import { UserTableRow } from '@/features/user/domain/user.read-models';
import { createUser } from '@/features/user/domain/actions/create-user.action';
import CreateUserForm from '@/features/user/ui/forms/create-user-form';
import CreateUserSuccess from '@/features/user/ui/modals/create-user-success';
import { ActionResult } from '@/shared/contracts/action-result';
import { CreatedUserData } from '@/features/user/domain/user.api-contracts';

interface Props {
    plotOptions: PlotMinimalReference[];
    onCloseModal: () => void;
    onUserCreated: (newUserData: CreatedUserData) => void;
}

export default function CreateUserModal({ plotOptions, onCloseModal, onUserCreated }: Props) {
    const [result, setResult] = useState<ActionResult<CreatedUserData> | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await createUser(formData);
            setResult(res);

            if (res.success && res.data) {
                onUserCreated(res.data);
            }
        } catch (err) {
            setResult('error');
        } finally {
            setLoading(false);
        }
    }

    const errorMsg =
        result === 'error'
            ? 'Wystąpił problem techniczny! Spróbuj ponownie.'
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno dodawania nowego konta działkowca"
                    className="panel surface-elevated mx-auto max-w-xl rounded-xl shadow-lg"
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
                    {result !== 'error' && result?.success && result.data ? (
                        <CreateUserSuccess result={result.data} />
                    ) : (
                        <CreateUserForm
                            onSubmit={handleSubmit}
                            plotsOptions={plotOptions}
                            loading={loading}
                            errorMsg={errorMsg}
                        />
                    )}
                </div>
            </div>
        </Portal>
    );
}
