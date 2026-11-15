import { MonthNumber } from '@/shared/utils/get-month-name';

interface WasteCollectionMonthSchedule {
    /** Calendar month, from 1 to 12. */
    month: MonthNumber;

    /** Days when mixed waste is collected. */
    mixedWasteCollectionDays: readonly number[];

    /** Days when sorted waste is collected. */
    sortedWasteCollectionDays: readonly number[];
}

interface WasteCollectionSchedule {
    /** Calendar year covered by the schedule. */
    year: number;

    /** Collection dates grouped by month. */
    dates: readonly WasteCollectionMonthSchedule[];
}

export const wasteCollectionSchedule = {
    year: 2026,
    dates: [
        { month: 5, mixedWasteCollectionDays: [11, 25], sortedWasteCollectionDays: [26] },
        { month: 6, mixedWasteCollectionDays: [8, 22], sortedWasteCollectionDays: [23] },
        { month: 7, mixedWasteCollectionDays: [6, 20], sortedWasteCollectionDays: [28] },
        { month: 8, mixedWasteCollectionDays: [3, 17, 31], sortedWasteCollectionDays: [25] },
        { month: 9, mixedWasteCollectionDays: [14, 28], sortedWasteCollectionDays: [29] },
        { month: 10, mixedWasteCollectionDays: [12, 26], sortedWasteCollectionDays: [27] },
    ],
} as const satisfies WasteCollectionSchedule;
