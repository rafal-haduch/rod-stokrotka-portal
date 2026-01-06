'use client';

import { useState } from 'react';
import { Role } from '@prisma/client';

import { deleteUser } from '@/actions/user/delete';

import { UpdateUserResult } from '@/types/editUserResult';

import DeleteUserSuccess from './DeleteUserSuccess';
import DeleteUserFields from './DeleteUserFields';

export interface DeleteUserFormProps {
    id: number;
    name: string;
    role: Role;
    plots: { id: number }[];
}

export default function DeleteUserForm({ user }: { user: DeleteUserFormProps }) {
    const [result, setResult] = useState<UpdateUserResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await deleteUser(formData);

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
                <DeleteUserSuccess />
            ) : (
                <DeleteUserFields user={user} loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
