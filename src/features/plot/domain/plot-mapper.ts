import { plotRepository } from '@/features/plot/domain/plot-repository';
import { CreatePlotData, UpdatePlotData } from '@/features/plot/domain/plot-api-contracts';
import { PlotTableRowsFromDb } from '@/features/plot/domain/plot-db-types';
import { PlotTableRow } from '@/features/plot/domain/plot-read-models';

/**
 * Maps a collection of plots with owners from database to CMS plot table rows read model.
 */
export function mapToPlotTableRows(input: PlotTableRowsFromDb): PlotTableRow[] {
    return input.map((plotRow) => ({
        id: plotRow.id,
        number: plotRow.number,
        area: plotRow.area,
        ownerName: plotRow.owner?.name ?? null,
    }));
}

/**
 * Maps raw plot entity returned from `create` action to `CreatedPlotData` contract.
 */
export function mapToCreatedPlotData(
    input: Awaited<ReturnType<typeof plotRepository.create>>
): CreatePlotData {
    return {
        id: input.id,
        plotNumber: input.number,
        area: input?.area ?? null,
    };
}

/**
 * Maps raw plot entity returned from `update` action to `CreatedPlotData` contract.
 */
export function mapToUpdatedPlotData(
    input: Awaited<ReturnType<typeof plotRepository.update>>
): UpdatePlotData {
    return {
        id: input.id,
        number: input.number,
        area: input?.area ?? null,
    };
}
