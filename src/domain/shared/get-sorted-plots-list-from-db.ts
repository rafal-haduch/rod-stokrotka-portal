import { plotRepository } from '../plot/plot.repository';

//REVIEW: change this interface location?
/**
 * Plot option used in UI selection inputs (dropdown multiselect).
 */
export interface PlotOption {
    id: number;
    plotNumber: string;
}

/**
 * @returns Plot options for UI selection inputs, sorted by plot number.
 */
export async function getSortedPlotsListFromDb(): Promise<PlotOption[]> {
    return (await plotRepository.getPlotsList()).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );
}
