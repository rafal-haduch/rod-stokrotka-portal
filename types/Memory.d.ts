import { PhotoWithoutTitle } from './PhotoWithoutTitle';

export type Memory = {
    title: string;
    date: string;
    text: string;
    photos: PhotoWithoutTitle[];
};
