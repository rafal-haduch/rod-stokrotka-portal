type FeeStatus = 'Opłacone' | 'Nieopłacone' | '...';

interface PlotFees {
    nr: string;
    status: FeeStatus;
}

export const plotsFeesStatus: PlotFees[] = [
    { nr: '100', status: 'Opłacone' },
    { nr: '101', status: 'Nieopłacone' },
    { nr: '102', status: 'Opłacone' },
    { nr: '103', status: 'Nieopłacone' },
    { nr: '104', status: 'Opłacone' },
    { nr: '...', status: '...' },
    // ... kolejne działki
];
