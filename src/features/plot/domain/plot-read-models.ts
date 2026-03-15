/**
 * Read model representing a single plot entry in plot listings.
 * Contains only data required for overview and administration purposes.
 */
export interface PlotTableRow {
    id: number;
    plotNumber: string;
    area: number | null;
    ownersNames: string[];
}

/**
 * Represents a plot with minimal information needed for UI display or assignment to a user.
 * Can be used in tables, user profiles, forms, and dropdowns.
 */
export interface PlotMinimalReference {
    id: number; // plot ID
    plotNumber: string; // human-readable plot number
}
