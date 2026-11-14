import { SEO } from '@/config/seo';

import { getPlotTableRows } from '@/features/plot/domain/queries/get-plot-table-rows-query';

import { CMSPlotsView } from '@/features/plot/ui/cms-plots-view';

export const metadata = SEO.CMS_PLOTS;

export default async function CMSPlotsPage() {
    const plotTableRows = await getPlotTableRows();

    return <CMSPlotsView plotTableRows={plotTableRows} />;
}
