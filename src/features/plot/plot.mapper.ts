import { PlotFromDb, PlotsWithOwnersFromDb, PlotWithOwnersFromDb } from './plot-from-db.types';
import {
    PlotDeleteFormReadModel,
    PlotTableRowReadModel,
    PlotUpdateFormReadModel,
} from './plot.read-models';

/**
 * Maps a collection of plots with owners from database to dashboard plot table rows read model.
 */
export function mapPlotsToPlotTableRows(plots: PlotsWithOwnersFromDb): PlotTableRowReadModel[] {
    return plots.map((plot) => ({
        id: plot.id,
        plotNumber: plot.plotNumber,
        area: plot.area,
        ownersNames: plot.ownersId.map((userPlot) => userPlot.user.name),
    }));
}

/**
 * Maps a plot entity from database to a plot update form read model.
 */
export function mapPlotToPlotUpdateForm(plot: PlotFromDb): PlotUpdateFormReadModel {
    return {
        id: plot.id,
        plotNumber: plot.plotNumber,
        area: plot.area,
    };
}

/**
 * Maps a plot entity from database to a plot delete form read model.
 */
export function mapPlotToPlotDeleteForm(plot: PlotWithOwnersFromDb): PlotDeleteFormReadModel {
    return {
        id: plot.id,
        plotNumber: plot.plotNumber,
        area: plot.area,
        ownersNames: plot.ownersId.map((userPlot) => userPlot.user.name),
    };
}
