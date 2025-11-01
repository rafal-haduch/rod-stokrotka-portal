import { PhotoWithoutTitle } from './PhotoWithoutTitle';

export type InvestmentData = {
    title: string;
    date: string;
    text: string;
    photos: PhotoWithoutTitle[];
};

export type InvestmentsListData = {
    id: string;
    title: string;
    date: string;
    cover: string;
};
