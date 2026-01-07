'use client';

import { useState } from 'react';

import { UpdatePlotResult } from '@/types/plotActionResult';
import { updatePlot } from '@/actions/plot/update';
import UpdatePlotSuccess from './UpdatePlotSuccess';
import UpdatePlotFields from './UpdatePlotFields';

export interface UpdatePlotFormProps {
    id: number;
    plotNumber: string;
    area: number | null;
}

export default function UpdatePlotForm({ plot }: { plot: UpdatePlotFormProps }) {
    const [result, setResult] = useState<UpdatePlotResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await updatePlot(formData);

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
                <UpdatePlotSuccess />
            ) : (
                <UpdatePlotFields plot={plot} loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
