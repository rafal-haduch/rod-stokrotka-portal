import { PlotMinimalReference, PlotTableRow } from '@/features/plot/domain/plot-read-models';
import { Decimal } from 'generated/prisma/internal/prismaNamespace';

// === FOR QUERIES ===

/**
 * API contract representing data returned by the get available plot query.
 */
export type GetAvailablePlotsResponse = {
    availablePlots: PlotMinimalReference[];
    withoutOwner: PlotMinimalReference[];
};

/**
 * API contract representing data returned by the get plot table rows query.
 */
export type GetPlotTableRowsResponse = PlotTableRow[];

// === FOR ACTIONS ===

/**
 * API contract representing data returned by the create plot action upon successful completion.
 */
export interface CreatePlotData {
    id: number;
    plotNumber: string;
    area: Decimal | null;
}

/**
 * API contract representing data returned by the update plot  action upon successful completion.
 */
export interface UpdatePlotData {
    id: number;
    number: string;
    area: Decimal | null;
}

/**
 * API contract representing data returned by the delete plot  action upon successful completion.
 */
export interface DeletePlotData {
    id: number;
}
