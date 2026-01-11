'use client';

import { useState } from 'react';

import { createUser } from '@/actions/user/create-user.action';

import { CreateUserResult } from '@/types/user-actions-result';

import CreateUserFields from './create-user-fields';
import CreateUserSuccess from './create-user-success';

export interface PlotOption {
    id: number;
    plotNumber: string;
}

export interface PlotsListProp {
    plots: PlotOption[];
}

export default function CreateUserForm({ plots }: PlotsListProp) {
    const [result, setResult] = useState<CreateUserResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await createUser(formData);

        setResult(res);
        setLoading(false);
    }

    const errorMsg = result && !result.success ? result.errorMsg : null;

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-theme-bg-secondary mx-auto max-w-xl rounded-xl p-4 shadow-lg"
        >
            {result?.success ? (
                <CreateUserSuccess result={result} onReset={() => setResult(null)} />
            ) : (
                <CreateUserFields plots={plots} loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
