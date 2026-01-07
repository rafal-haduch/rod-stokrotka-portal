import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ROUTES } from '@/constants/routes';
import UpdatePlotForm, { UpdatePlotFormProps } from './components/UpdatePlotForm';

export default async function UpdatePlotPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const plotId = Number(id);

    const plot = await prisma.plot.findUnique({
        where: { id: plotId },
    });

    if (!plot) redirect(ROUTES.PLOTS_DASHBOARD.path);

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
