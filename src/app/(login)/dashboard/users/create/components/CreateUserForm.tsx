'use client';

import { useState } from 'react';

import { createUser } from '@/actions/user/create';

import { CreateUserResult } from '@/types/createUserResult';

import CreateUserFields from './CreateUserFields';
import CreateUserSuccess from './CreateUserSuccess';

export default function CreateUserForm() {
    const [result, setResult] = useState<CreateUserResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');
        // 1️⃣ error znika NATYCHMIAST
        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await createUser(formData);

        setResult(res);
        setLoading(false);
    }

    const error = result && !result.success ? result.error : null;

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-theme-bg-secondary mx-auto max-w-xl rounded-xl p-4 shadow-lg"
        >
            {result?.success ? (
                <CreateUserSuccess result={result} onReset={() => setResult(null)} />
            ) : (
                <CreateUserFields loading={loading} error={error} />
            )}
        </form>
    );
}
