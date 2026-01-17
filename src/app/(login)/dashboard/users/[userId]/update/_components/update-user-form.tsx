'use client';

import { useState } from 'react';

import { updateUser } from '@/domain/user/actions/update-user.action';

import { UpdateUserResult } from '@/types/user-actions-result';

import UpdateUserFields from './update-user-fields';
import UpdateUserSuccess from './update-user-success';
import { UserUpdateFormReadModel } from '@/domain/user/user.read-models';
import { PlotOption } from '@/domain/shared/get-sorted-plots-list-from-db';

interface Props {
    user: UserUpdateFormReadModel;
    plotsOptions: PlotOption[];
}

export default function UpdateUserForm({ user, plotsOptions }: Props) {
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
                <UpdateUserFields
                    user={user}
                    plotsOptions={plotsOptions}
                    loading={loading}
                    errorMsg={errorMsg}
                />
            )}
        </form>
    );
}
