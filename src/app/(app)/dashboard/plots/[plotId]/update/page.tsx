import { redirect } from 'next/navigation';

import { ROUTES } from '@/config/routes';

import { plotRepository } from '@/domain/plot/plot.repository';
import { mapPlotToPlotUpdateForm } from '@/domain/plot/plot.mapper';

import UpdatePlotForm from './_components/update-plot-form';

export default async function UpdatePlotPage({ params }: { params: Promise<{ plotId: string }> }) {
    const { plotId } = await params;
    const id = Number(plotId);

    const plot = await plotRepository.findById(id);
    if (!plot) redirect(ROUTES.DASHBOARD_PLOTS.path);

    const plotForUpdate = mapPlotToPlotUpdateForm(plot);

    return (
        <section>
            <h2>Edytuj dzialkę</h2>

            <UpdatePlotForm plot={plotForUpdate} />
        </section>
    );
}
