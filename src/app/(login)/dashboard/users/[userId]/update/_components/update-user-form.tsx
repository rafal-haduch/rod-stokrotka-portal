'use client';

import { useState } from 'react';

import { updateUser } from '@/actions/user/update-user.action';

import { UpdateUserResult } from '@/types/user-actions-result';

import UpdateUserFields from './update-user-fields';
import UpdateUserSuccess from './update-user-success';
import { PlotOption } from '../../../create/_components/create-user-form';
import { UseUpdateFormReadModel } from '@/domain/user/user.read-models';

interface Props {
    user: UseUpdateFormReadModel;
    plotsList: PlotOption[];
}

export default function UpdateUserForm({ user, plotsList }: Props) {
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
                    plots={plotsList}
                    loading={loading}
                    errorMsg={errorMsg}
                />
            )}
        </form>
    );
}
