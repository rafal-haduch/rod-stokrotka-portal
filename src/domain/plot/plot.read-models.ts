/**
 * Read model representing a single plot entry in plot listings.
 * Contains only data required for overview and administration purposes.
 */
export interface PlotTableRowReadModel {
    id: number;
    plotNumber: string;
    area: number | null;
    ownersNames: string[];
}

/**
 * Read model used to populate the plot edit form.
 * Contains only editable fields.
 */
export interface PlotUpdateFormReadModel {
    id: number;
    plotNumber: string;
    area: number | null;
}

/**
 * Read model used to populate the plot delete form.
 * Contains owners names.
 */
export interface PlotDeleteFormReadModel {
    id: number;
    plotNumber: string;
    area: number | null;
    ownersNames: string[];
}
