<<<<<<< HEAD:src/content/data/waste-collection-schedule.ts
interface WasteCollectionSchedule {
    month: string;
    mixedWasteCollectionDay: number[];
    sortedWasteCollectionDay: number[];
}

export const wasteCollectionSchedule: WasteCollectionSchedule[] = [
    { month: 'Maj', mixedWasteCollectionDay: [5, 19], sortedWasteCollectionDay: [27] },
    { month: 'Czerwiec', mixedWasteCollectionDay: [2, 16, 30], sortedWasteCollectionDay: [24] },
    { month: 'Lipiec', mixedWasteCollectionDay: [14, 28], sortedWasteCollectionDay: [22] },
    { month: 'Sierpień', mixedWasteCollectionDay: [11, 25], sortedWasteCollectionDay: [26] },
    { month: 'Wrzesień', mixedWasteCollectionDay: [8, 22], sortedWasteCollectionDay: [23] },
    { month: 'Październik', mixedWasteCollectionDay: [6, 20], sortedWasteCollectionDay: [28] },
] as const;
=======
interface WasteCollectionSchedule {
    month: string;
    mixedWasteCollectionDay: number[];
    sortedWasteCollectionDay: number[];
}

export const wasteCollectionSchedule: WasteCollectionSchedule[] = [
    { month: 'Maj', mixedWasteCollectionDay: [11, 25], sortedWasteCollectionDay: [26] },
    { month: 'Czerwiec', mixedWasteCollectionDay: [8, 22], sortedWasteCollectionDay: [23] },
    { month: 'Lipiec', mixedWasteCollectionDay: [6, 20], sortedWasteCollectionDay: [28] },
    { month: 'Sierpień', mixedWasteCollectionDay: [3, 17, 31], sortedWasteCollectionDay: [25] },
    { month: 'Wrzesień', mixedWasteCollectionDay: [14, 28], sortedWasteCollectionDay: [29] },
    { month: 'Październik', mixedWasteCollectionDay: [12, 26], sortedWasteCollectionDay: [27] },
] as const;
>>>>>>> hotfix:src/data/wasteCollectionSchedule.ts
