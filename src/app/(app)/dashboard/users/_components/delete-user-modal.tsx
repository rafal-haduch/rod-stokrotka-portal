'use client';

import Portal from '@/components/portal';
import { DeleteUserResult } from '@/contracts/user-actions';
import { deleteUser } from '@/domain/user/actions/delete-user.action';
import { UserTableRow } from '@/domain/user/user.read-models';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUserDeleted: (id: number) => void;
}

export default function DeleteUserModal({ user, onCloseModal, onUserDeleted }: Props) {
    const [result, setResult] = useState<DeleteUserResult | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (result !== 'error' && result?.success) {
            onUserDeleted(user.id);
        }
    }, [result, onCloseModal, onUserDeleted]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await deleteUser(formData);

        setResult(res);
        setLoading(false);
    }

    const errorMsg =
        result === 'error'
            ? 'Wystąpił nieoczekiwany błąd!'
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno usuwania konta działkowca"
                    className="panel-br mx-auto max-w-xl rounded-xl shadow-lg"
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
                        <p id="delete-user-form-heading" className="mb-4 text-center">
                            Czy na pewno chcesz usunąć konto działkowca <strong>{user.name}</strong>
                            ? <br /> Tę operację może cofnąć jedynie administrator strony.
                        </p>
                        <form onSubmit={handleSubmit} aria-labelledby="delete-user-form-heading">
                            <input type="hidden" name="userId" value={user.id}></input>

                            {errorMsg ? (
                                <p className="text-center text-red-500">{errorMsg}</p>
                            ) : (
                                <div className="flex flex-row items-center justify-evenly gap-4 sm:gap-0">
                                    <button className="btn btn-md btn-danger" disabled={loading}>
                                        Usuń użytkownika
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onCloseModal}
                                        className="btn btn-md btn-theme-secondary"
                                    >
                                        Anuluj
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
