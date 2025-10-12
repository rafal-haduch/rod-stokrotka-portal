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
];
