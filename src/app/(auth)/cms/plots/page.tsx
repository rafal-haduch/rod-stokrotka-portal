import { getPlotTableRows } from '@/features/plot/domain/queries/get-plot-table-rows-query';
import { CMSPlotsView } from '@/features/plot/ui/cms-plots-view';

export default async function CMSPlotsPage() {
    const plotTableRows = await getPlotTableRows();

    return <CMSPlotsView plotTableRows={plotTableRows} />;
}
