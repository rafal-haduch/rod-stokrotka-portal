interface TreasurersDuties {
    date: string;
}

export const treasurersDuties: TreasurersDuties[] = [
    { date: '10 czerwiec, w godzinach: 16:00-18:00' },
    { date: '17 czerwiec, w godzinach: 16:00-18:00' },
    { date: '26 czerwiec, w godzinach: 16:00-18:00' },
    { date: '---' },
    { date: '2 września, w godzinach: 17:00-18:00' },
    { date: '11 września, w godzinach: 17:00-18:00' },
    { date: '16 września, w godzinach: 17:00-18:00' },
    { date: '23 września, w godzinach: 17:00-18:00' },
] as const;
