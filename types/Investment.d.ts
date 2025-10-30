import { PhotoWithoutTitle } from './PhotoWithoutTitle';

export type Investment = {
    title: string;
    date: string;
    text: string;
    photos: PhotoWithoutTitle[];
};
