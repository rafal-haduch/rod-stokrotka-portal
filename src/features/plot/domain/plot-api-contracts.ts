/**
 * API contract representing data returned by the create user action upon successful completion.
 */
export interface CreatedPlotData {
    plotNumber: string;
    area: number | null;
}
