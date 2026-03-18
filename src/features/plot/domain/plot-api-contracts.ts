import { PlotMinimalReference, PlotTableRow } from '@/features/plot/domain/plot-read-models';

// === FOR QUERIES ===

/**
 * API contract representing data returned by the get available plot query.
 */
export type GetAvailablePlotsResponse = PlotMinimalReference[];

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
    area: number | null;
}

/**
 * API contract representing data returned by the update plot  action upon successful completion.
 */
export interface UpdatePlotData {
    id: number;
    plotNumber: string;
    area: number | null;
}

/**
 * API contract representing data returned by the delete plot  action upon successful completion.
 */
export interface DeletePlotData {
    id: number;
}
