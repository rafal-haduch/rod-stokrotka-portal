'use client';

import { useState } from 'react';

import { CreatePlotResult } from '@/contracts/plot-actions';

import { createPlot } from '@/features/plot/actions/create-plot.action';

import CreatePlotFields from './create-plot-fields';
import CreatePlotSuccess from './create-plot-success';

export default function CreatePlotForm() {
    const [result, setResult] = useState<CreatePlotResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await createPlot(formData);

        setResult(res);
        setLoading(false);
    }

    const error = result && !result.success ? result.errorMsg : null;
    console.log(result);

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-theme-bg-secondary mx-auto max-w-xl rounded-xl p-4 shadow-lg"
        >
            {result?.success ? (
                <CreatePlotSuccess result={result} onReset={() => setResult(null)} />
            ) : (
                <CreatePlotFields loading={loading} error={error} />
            )}
        </form>
    );
}
