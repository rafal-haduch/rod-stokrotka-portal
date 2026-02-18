'use client';

import { useState } from 'react';

import { createUser } from '@/domain/user/actions/create-user.action';

import { CreateUserResult } from '@/contracts/user-actions-result';

import CreateUserForm from './create-user-form';
import CreateUserSuccess from './create-user-success';
import { PlotOption } from '@/domain/shared/get-sorted-plots-list-from-db';

export interface Props {
    plotsOptions: PlotOption[];
    onCloseModal: () => void;
    onUserCreated: () => void;
}

export default function CreateUserDialog({ plotsOptions, onCloseModal, onUserCreated }: Props) {
    const [result, setResult] = useState<CreateUserResult | 'error' | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const res = await createUser(formData);
            setResult(res);
        } catch (err) {
            setResult('error');
        } finally {
            setLoading(false);
        }
    }

    const errorMsg =
        result === 'error'
            ? 'Wystąpił nieoczekiwany błąd!'
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <div
            aria-label="Okno dodawania nowego konta działkowca"
            className="panel-br mx-auto max-w-xl rounded-xl shadow-lg"
        >
            {result !== 'error' && result?.success ? (
                <CreateUserSuccess
                    result={result}
                    onUserCreated={() => {
                        onUserCreated();
                        setResult(null); //NOTE: Clear result data.
                    }}
                />
            ) : (
                <CreateUserForm
                    onSubmit={handleSubmit}
                    onCloseModal={onCloseModal}
                    plotsOptions={plotsOptions}
                    loading={loading}
                    errorMsg={errorMsg}
                />
            )}
        </div>
    );
}
