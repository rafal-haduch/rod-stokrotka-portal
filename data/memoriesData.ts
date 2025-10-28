import { Memory } from '@/types/Memory';
import { memory1Photos, memory2Photos, memory3Photos } from './memoryPhotos';

// pełne dane -> used in baseURL/gallery/memories/[slug]
export const memoriesData: Record<string, Memory> = {
    '1': {
        title: 'Walne zebranie 2025',
        date: '17.05.2025',
        text: 'tekst opisowy',
        photos: memory1Photos,
    },
    '2': {
        title: 'Zima 2025',
        date: '17.12.2025',
        text: 'tekst opisowy',
        photos: memory2Photos,
    },
    '3': {
        title: 'Sadzenie drzew',
        date: '17.06.2026',
        text: 'tekst opisowy',
        photos: memory3Photos,
    },
};

// lista skrócona, generowana automatycznie -> used in baseURL/gallery <MemoriesList/>
export const memoriesList = Object.entries(memoriesData).map(([slug, memory]) => ({
    slug,
    title: memory.title,
    date: memory.date,
    cover: `/images/covers-memories/memory-${slug}.jpg`,
}));
