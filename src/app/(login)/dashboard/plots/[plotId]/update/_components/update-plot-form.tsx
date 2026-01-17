'use client';

import { useState } from 'react';

import { UpdatePlotResult } from '@/types/plot-actions-result';
import { updatePlot } from '@/domain/plot/actions/update-plot.action';
import UpdatePlotSuccess from './update-plot-success';
import UpdatePlotFields from './update-plot-fields';
import { PlotUpdateFormReadModel } from '@/domain/plot/plot.read-models';

export default function UpdatePlotForm({ plot }: { plot: PlotUpdateFormReadModel }) {
    const [result, setResult] = useState<UpdatePlotResult | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

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
