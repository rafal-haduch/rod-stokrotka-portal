'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { DeleteUserResult } from '@/contracts/user-actions';

import { CustomButton } from '@/components/custom-button';
import Portal from '@/components/portal';

import { deleteUser } from '../../domain/actions/delete-user.action';
import { UserTableRow } from '../../domain/user.read-models';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUserDeleted: (id: number) => void;
}

export default function DeleteUserModal({ user, onCloseModal, onUserDeleted }: Props) {
    const [result, setResult] = useState<DeleteUserResult | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await deleteUser(formData);
            setResult(res);

            if (res.success) {
                onUserDeleted(user.id);
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
                        <form onSubmit={handleSubmit} aria-labelledby="delete-user-form-heading">
                            <input type="hidden" name="userId" value={user.id}></input>
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
                                        ? <br /> Tę operację może cofnąć jedynie administrator
                                        strony!
                                    </p>
                                    <div className="flex flex-row items-center justify-evenly gap-4 sm:gap-0">
                                        <CustomButton
                                            type="submit"
                                            disabled={loading}
                                            size="md"
                                            variant="danger"
                                        >
                                            Usuń użytkownika
                                        </CustomButton>
                                        <CustomButton
                                            type="button"
                                            onClick={onCloseModal}
                                            size="md"
                                            variant="outline"
                                        >
                                            Anuluj
                                        </CustomButton>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
