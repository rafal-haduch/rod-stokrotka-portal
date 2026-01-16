import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import { plotRepository } from '@/lib/repositories/plot.repository';

import DeletePlotForm, { DeletePlotFormProps } from './_components/delete-plot-form';

export default async function DeletePlotPage({ params }: { params: Promise<{ plotId: string }> }) {
    const { plotId } = await params;
    const id = Number(plotId);

    const plotDb = await plotRepository.getPlotWithOwnersForDashboardForm({ id });
    if (!plotDb) redirect(ROUTES.DASHBOARD_PLOTS.path);

    const plotFormProps: DeletePlotFormProps = {
        id: plotDb.id,
        plotNumber: plotDb.plotNumber,
        area: plotDb.area,
        owners: plotDb.ownersId.map((p) => p.user.name),
    };

    return (
        <section>
            <h2>Usuń działkę</h2>

            <DeletePlotForm plot={plotFormProps} />
        </section>
    );
}
