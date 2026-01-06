'use client';

import { useState } from 'react';
import { Role } from '@prisma/client';

import { updateUser } from '@/actions/user/update';

import { UpdateUserResult } from '@/types/editUserResult';

import UpdateUserFields from './UpdateUserFields';
import UpdateUserSuccess from './UpdateUserSuccess';

export interface UpdateUserFormProps {
    id: number;
    name: string;
    role: Role;
    plots: { id: number }[];
}

export default function UpdateUserForm({ user }: { user: UpdateUserFormProps }) {
    const [result, setResult] = useState<UpdateUserResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await updateUser(formData);

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
                <UpdateUserSuccess />
            ) : (
                <UpdateUserFields user={user} loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
