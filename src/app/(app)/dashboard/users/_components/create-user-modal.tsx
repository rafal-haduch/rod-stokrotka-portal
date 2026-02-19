'use client';

import { useState } from 'react';

import { CreateUserResult } from '@/contracts/user-actions';

import { createUser } from '@/domain/user/actions/create-user.action';
import { PlotOption } from '@/domain/plot/plot.read-models';

import Portal from '@/components/portal';

import CreateUserSuccess from './create-user-success';
import CreateUserForm from './create-user-form';

interface Props {
    plotOptions: PlotOption[];
    onCloseModal: () => void;
    onUserCreated: () => void;
}

export default function CreateUserModal({ plotOptions, onCloseModal, onUserCreated }: Props) {
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
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
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
