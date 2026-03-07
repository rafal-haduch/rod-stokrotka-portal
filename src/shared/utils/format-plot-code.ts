// TODO: remove into /src/features/plot/plot/helpers.ts
export function formatPlotCode(plotNumber: string) {
    if (plotNumber.length < 2) {
        return `D00${plotNumber}`;
    } else if (plotNumber.length < 3) {
        return `D0${plotNumber}`;
    } else {
        return `D${plotNumber}`;
    }
}
