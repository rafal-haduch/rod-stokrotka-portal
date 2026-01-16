import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import UpdatePlotForm, { UpdatePlotFormProps } from './_components/update-plot-form';
import { plotRepository } from '@/domain/plot/plot.repository';

export default async function UpdatePlotPage({ params }: { params: Promise<{ plotId: string }> }) {
    const { plotId } = await params;
    const id = Number(plotId);

    const plot = await plotRepository.getPlotForDashboardForm({ id });

    if (!plot) redirect(ROUTES.DASHBOARD_PLOTS.path);

    const formPlot: UpdatePlotFormProps = {
        id: plot.id,
        plotNumber: plot.plotNumber,
        area: plot.area,
    };

    return (
        <section>
            <h2>Edytuj dzialkę</h2>

            <UpdatePlotForm plot={formPlot} />
        </section>
    );
}
