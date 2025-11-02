import { PhotoWithoutTitle } from './PhotoWithoutTitle';

export type Investment = {
    title: string;
    date: string;
    text: string;
    photos: PhotoWithoutTitle[];
};

export type InvestmentInList = {
    id: string;
    title: string;
    date: string;
    cover: string;
};
