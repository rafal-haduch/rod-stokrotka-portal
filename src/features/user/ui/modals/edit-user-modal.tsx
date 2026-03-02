'use client';

import { useState } from 'react';

import { UpdateUserResult } from '@/contracts/user-actions';

import Portal from '@/components/portal';

import { PlotOption } from '@/features/plot/plot.read-models';

import { UserTableRow } from '../../domain/user.read-models';
import { updateUser } from '../../domain/actions/update-user.action';

import EditUserForm from '../forms/edit-user-form';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
    onUpdatedUser: (updatedUserRow: UserTableRow) => void;
    plotOptions: PlotOption[];
}

export default function EditUserModal({ user, onCloseModal, onUpdatedUser, plotOptions }: Props) {
    const [result, setResult] = useState<UpdateUserResult | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await updateUser(formData);
            setResult(res);

            if (res.success) {
                onUpdatedUser(res.data);
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
                    className="panel surface-elevated mx-auto max-w-xl"
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
