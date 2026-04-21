'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/portal';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import { deleteUser } from '@/features/user/domain/actions/delete-user-action';
import { DeleteUserData } from '@/features/user/domain/user-api-contracts';

import { DeleteUserForm } from '@/features/user/ui/crud-forms/delete-user-form';
import { CRUDModal } from '@/components/crud-modal';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUserDeleted: (deletedUser: DeleteUserData) => void;
}

export default function DeleteUserModal({ user, onCloseModal, onUserDeleted }: Props) {
    const [result, setResult] = useState<ActionResult<DeleteUserData> | TechnicalError | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => deleteUser(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onUserDeleted(res.data);
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
                ariaLabel="Okno usuwania konta działkowca z systemu"
                titleCloseButton="Zamknij okno"
                resetResult={() => setResult(null)}
                onCloseModal={onCloseModal}
            >
                {errorMsg ? (
                    <p className="text-center text-red-500">{errorMsg}</p>
                ) : (
                    <>
                        <p
                            id="delete-user-form-heading"
                            className="mb-4 text-center text-xl font-semibold"
                        >
                            Usuń konto działkowca
                        </p>
                        <p className="text-theme-foreground-content mb-4 text-center">
                            Czy na pewno chcesz usunąć konto działkowca{' '}
                            <strong className="whitespace-nowrap">{user.name}</strong>
                            ? <br /> Tę operację może cofnąć jedynie administrator strony!
                        </p>
                        <DeleteUserForm
                            userData={user}
                            onSubmit={handleSubmit}
                            onCloseModal={onCloseModal}
                            loading={loading}
                        />
                    </>
                )}
            </CRUDModal>
        </Portal>
    );
}
