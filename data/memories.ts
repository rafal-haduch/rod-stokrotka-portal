import { MemoryInList, Memory } from '@/types/Memory';
import { memory1Photos, memory2Photos, memory3Photos } from './memoryPhotos';

// pełne dane -> used in baseURL/gallery/memories/[slug]
export const memoriesDataById: Record<string, Memory> = {
    '1': {
        title: 'Walne zebranie 2025',
        date: '17.05.2025',
        text: 'Lorem ipsum dolor sit amet ut minim voluptua iusto facilisi dolore. Sit et diam gubergren takimata eirmod takimata blandit eros ut kasd sanctus vel et ex. In erat te eum voluptua consequat et esse magna labore ad elitr gubergren gubergren dignissim ea. Vero amet lorem erat. Kasd rebum tempor ipsum erat aliquyam consetetur est lorem.',
        photos: memory1Photos,
    },
    '2': {
        title: 'Zima 2025',
        date: '17.12.2025',
        text: 'Lorem ipsum dolor sit amet ut minim voluptua iusto facilisi dolore. Sit et diam gubergren takimata eirmod takimata blandit eros ut kasd sanctus vel et ex. In erat te eum voluptua consequat et esse magna labore ad elitr gubergren gubergren dignissim ea. Vero amet lorem erat. Kasd rebum tempor ipsum erat aliquyam consetetur est lorem.',
        photos: memory2Photos,
    },
    '3': {
        title: 'Sadzenie drzew',
        date: '17.06.2026',
        text: 'Lorem ipsum dolor sit amet ut minim voluptua iusto facilisi dolore. Sit et diam gubergren takimata eirmod takimata blandit eros ut kasd sanctus vel et ex. In erat te eum voluptua consequat et esse magna labore ad elitr gubergren gubergren dignissim ea. Vero amet lorem erat. Kasd rebum tempor ipsum erat aliquyam consetetur est lorem.',
        photos: memory3Photos,
    },
};

// lista skrócona, generowana automatycznie -> used in baseURL/gallery <MemoriesList/>
export const memoriesSummaryList: MemoryInList[] = Object.entries(memoriesDataById).map(
    ([id, memory]) => ({
        id,
        title: memory.title,
        date: memory.date,
        cover: `/images/covers-memories/memory-${id}.jpg`,
    })
);
