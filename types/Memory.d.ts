import { PhotoWithoutTitle } from './PhotoWithoutTitle';

export type Memory = {
    title: string;
    date: string;
    text: string;
    photos: PhotoWithoutTitle[];
};

export type MemoryInList = {
    id: string;
    title: string;
    date: string;
    cover: string;
};
