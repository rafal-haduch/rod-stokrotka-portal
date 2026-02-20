'use client';

import Portal from '@/components/portal';
import { UpdateUserResult } from '@/contracts/user-actions';
import { updateUser } from '@/domain/user/actions/update-user.action';
import { UserTableRow } from '@/domain/user/user.read-models';
import { useEffect, useState } from 'react';
import EditUserForm from './edit-user-form';
import { PlotOption } from '@/domain/plot/plot.read-models';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUpdatedUser: (updatedUserRow: UserTableRow) => void;
    plotOptions: PlotOption[];
}

export default function EditUserModal({ user, onCloseModal, onUpdatedUser, plotOptions }: Props) {
    const [result, setResult] = useState<UpdateUserResult | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    //REVIEW: czy miec te 3 dependency?
    useEffect(() => {
        if (result !== 'error' && result?.success) {
            onUpdatedUser(result.data);
        }
    }, [result, onCloseModal, onUpdatedUser]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await updateUser(formData);

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
                    aria-label="Okno dodawania nowego konta działkowca"
                    className="panel-br mx-auto max-w-xl rounded-xl shadow-lg"
                >
                    <EditUserForm
                        onSubmit={handleSubmit}
                        onCloseModal={onCloseModal}
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
