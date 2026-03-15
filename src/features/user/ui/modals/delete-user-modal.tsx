'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import Portal from '@/components/portal';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { safeAction } from '@/shared/utils/safe-action';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import { deleteUser } from '@/features/user/domain/actions/delete-user-action';
import DeleteUserForm from '@/features/user/ui/forms/delete-user-form';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUserDeleted: (id: number) => void;
}

export default function DeleteUserModal({ user, onCloseModal, onUserDeleted }: Props) {
    const [result, setResult] = useState<ActionResult<void> | TechnicalError | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction<void>(() => deleteUser(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onUserDeleted(user.id);
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
                    aria-label="Okno usuwania konta działkowca"
                    className="panel surface-elevated mx-auto max-w-xl"
                >
                    <button
                        type="button"
                        onClick={onCloseModal}
                        title="Zamknij okno dodawania nowego działkowca"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <div className="px-2 pb-6 sm:px-6">
                        {errorMsg ? (
                            <p className="text-center text-red-500">{errorMsg}</p>
                        ) : (
                            <>
                                <p
                                    id="delete-user-form-heading"
                                    className="text-theme-foreground-content mb-4 text-center"
                                >
                                    Czy na pewno chcesz usunąć konto działkowca{' '}
                                    <strong className="whitespace-nowrap">{user.name}</strong>
                                    ? <br /> Tę operację może cofnąć jedynie administrator strony!
                                </p>
                                <DeleteUserForm
                                    onSubmit={handleSubmit}
                                    onCloseModal={onCloseModal}
                                    userData={user}
                                    loading={loading}
                                    errorMsg={errorMsg}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
