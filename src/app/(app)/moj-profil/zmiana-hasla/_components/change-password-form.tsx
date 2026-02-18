'use client';

import { useState } from 'react';

import { ChangePasswordResult } from '@/contracts/user-actions';

import { changePassword } from '@/domain/user/actions/change-password.action';

import ChangePasswordFields from './change-password-fields';
import ChangePasswordSuccess from './change-password-success';

export default function ChangePasswordForm() {
    const [result, setResult] = useState<ChangePasswordResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await changePassword(formData);

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
                <ChangePasswordSuccess />
            ) : (
                <ChangePasswordFields loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
