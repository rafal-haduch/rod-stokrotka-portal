import { PlotOption } from '../plot.read-models';
import { plotRepository } from '../plot.repository';

/**
 * Fetches from database only the fields needed for UI (multi-select dropdown inputs) and sorts them by plot number.
 */
export async function getSortedAvailablePlots(): Promise<PlotOption[]> {
    return (await plotRepository.getPlotOptions()).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );
}
