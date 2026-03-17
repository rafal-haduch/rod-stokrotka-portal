// === FOR QUERIES ===

import { PlotMinimalReference, PlotTableRow } from '@/features/plot/domain/plot-read-models';

/**
 * API contract representing data returned by the get available plot query.
 */
export type FetchedAvailablePlots = PlotMinimalReference[];

/**
 * API contract representing data returned by the get plot table rows query.
 */
export type FetchedPlotTableRows = PlotTableRow[];

/**
 * API contract representing data returned by the create plot action upon successful completion.
 */
export interface CreatePlotResult {
    id: number;
    plotNumber: string;
    area: number | null;
}

/**
 * API contract representing data returned by the update plot  action upon successful completion.
 */
export interface UpdatePlotResult {
    id: number;
    plotNumber: string;
    area: number | null;
}

/**
 * API contract representing data returned by the delete plot  action upon successful completion.
 */
export interface DeletePlotResult {
    id: number;
}
