'use client';

import { useState } from 'react';

import { DeletePlotResult } from '@/shared/contracts/plot-actions';

import { deletePlot } from '@/features/plot/actions/delete-plot.action';
import DeletePlotFields from './delete-plot-fields';
import DeletePlotSuccess from './delete-plot-success';
import { PlotDeleteFormReadModel } from '@/features/plot/plot.read-models';

export default function DeletePlotForm({ plot }: { plot: PlotDeleteFormReadModel }) {
    const [result, setResult] = useState<DeletePlotResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('handleSubmit');

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const res = await deletePlot(formData);

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
                <DeletePlotSuccess />
            ) : (
                <DeletePlotFields plot={plot} loading={loading} errorMsg={errorMsg} />
            )}
        </form>
    );
}
