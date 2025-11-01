import { investment1Photos, investment2Photos } from './investmentPhotos';
import { Investment, InvestmentInList } from '@/types/Investment';

// pełne dane -> used in baseURL/investments/[id]
export const investmentsDataById: Record<string, Investment> = {
    '1': {
        title: 'Naprawa Ogrodzenia',
        date: '17.10.2025',
        text: 'tekst opisowy',
        photos: investment1Photos,
    },
    '2': {
        title: 'Budowa Wiaty',
        date: '17.06.2026',
        text: 'tekst opisowy',
        photos: investment2Photos,
    },
};

// lista skrócona, generowana automatycznie -> used in baseURL/investments <InvestmentsList/>
export const investmentsSummaryList: InvestmentInList[] = Object.entries(investmentsDataById).map(
    ([id, memory]) => ({
        id,
        title: memory.title,
        date: memory.date,
        cover: `/images/covers-investments/investment-${id}.jpg`,
    })
);
