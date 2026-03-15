import { PlotsWithOwnersFromDb } from './plot-db-types';
import { PlotTableRow } from './plot-read-models';
import { plotRepository } from '@/features/plot/domain/plot-repository';
import { CreatedPlotData } from '@/features/plot/domain/plot-api-contracts';

/**
 * Maps a collection of plots with owners from database to CMS plot table rows read model.
 */
export function mapToPlotTableRows(plots: PlotsWithOwnersFromDb): PlotTableRow[] {
    return plots.map((plot) => ({
        id: plot.id,
        plotNumber: plot.plotNumber,
        area: plot.area,
        ownersNames: plot.ownersId.map((userPlot) => userPlot.user.name),
    }));
}

/**
 * Maps raw plot entity returned from `create` action to `CreatedPlotData` contract.
 */
export function mapToCreatedPlotData(
    input: Awaited<ReturnType<typeof plotRepository.create>>
): CreatedPlotData {
    return {
        plotNumber: input.plotNumber,
        area: input.area,
    };
}
