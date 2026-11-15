export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const monthFormatter = new Intl.DateTimeFormat('pl-PL', {
    month: 'long',
    timeZone: 'UTC',
});

export function getMonthName(month: MonthNumber): string {
    return monthFormatter.format(new Date(Date.UTC(2000, month - 1, 1)));
}
