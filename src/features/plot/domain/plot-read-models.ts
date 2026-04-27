import { Decimal } from '@prisma/client/runtime/binary';

/**
 * Read model representing a single plot entry in plot listings.
 * Contains only data required for overview and administration purposes.
 */
export interface PlotTableRow {
    id: number;
    number: string;
    area: string | null;
}

/**
 * Represents a plot with minimal information needed for UI display or assignment to a user.
 */
export interface PlotMinimalReference {
    id: number; // plot ID
    number: string; // human-readable plot number
}
