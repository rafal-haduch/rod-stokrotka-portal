import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import { plotRepository } from '@/domain/plot/plot.repository';
import { mapPlotToPlotDeleteForm } from '@/domain/plot/plot.mapper';

import DeletePlotForm from './_components/delete-plot-form';

export default async function DeletePlotPage({ params }: { params: Promise<{ plotId: string }> }) {
    const { plotId } = await params;
    const id = Number(plotId);

    const plot = await plotRepository.findByIdWithOwners(id);
    if (!plot) redirect(ROUTES.DASHBOARD_PLOTS.path);

    const plotForDelete = mapPlotToPlotDeleteForm(plot);

    return (
        <section>
            <h2>Usuń działkę</h2>

            <DeletePlotForm plot={plotForDelete} />
        </section>
    );
}
