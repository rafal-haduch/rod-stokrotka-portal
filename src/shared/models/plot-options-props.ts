import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

export interface ComponentPropsWithPlotOptions {
    availablePlotOptions: PlotMinimalReference[];
    plotOptionsWithoutOwner: PlotMinimalReference[];
}
