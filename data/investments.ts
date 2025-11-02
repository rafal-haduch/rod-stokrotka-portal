import { Investment, InvestmentInList } from '@/types/Investment';

//import { investment1Photos } from './investmentPhotos';

// pełne dane -> used in baseURL/investments/[id]
export const investmentsDataById: Record<string, Investment> = {
    // '1': {
    //     title: 'Naprawa Ogrodzenia',
    //     date: '17.10.2025',
    //     text: 'Lorem ipsum dolor sit amet ut minim voluptua iusto facilisi dolore. Sit et diam gubergren takimata eirmod takimata blandit eros ut kasd sanctus vel et ex. In erat te eum voluptua consequat et esse magna labore ad elitr gubergren gubergren dignissim ea. Vero amet lorem erat. Kasd rebum tempor ipsum erat aliquyam consetetur est lorem.',
    //     photos: investment1Photos,
    // },
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
