export const SEASONS = ['spring', 'summer', 'autumn', 'winter'] as const;

export type Season = (typeof SEASONS)[number];

export function getSeason(date = new Date()): Season {
    const year = date.getFullYear();

    const springStart = new Date(year, 2, 21); // 21 marca
    const summerStart = new Date(year, 5, 22); // 22 czerwca
    const autumnStart = new Date(year, 8, 23); // 23 września
    const winterStart = new Date(year, 11, 22); // 22 grudnia

    if (date >= springStart && date < summerStart) return 'spring';
    if (date >= summerStart && date < autumnStart) return 'summer';
    if (date >= autumnStart && date < winterStart) return 'autumn';
    return 'winter';
}
