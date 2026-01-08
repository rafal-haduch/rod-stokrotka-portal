import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import { ROUTES } from '@/constants/routes';

import DeletePlotForm, { DeletePlotFormProps } from './components/DeletePlotForm';

export default async function DeletePlotPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const plotId = Number(id);

    const plotDb = await prisma.plot.findUnique({
        where: { id: plotId },
        include: {
            ownersId: {
                include: {
                    user: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });

    if (!plotDb) redirect(ROUTES.PLOTS_DASHBOARD.path);

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
