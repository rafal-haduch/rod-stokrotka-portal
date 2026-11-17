import { Photo } from '@/shared/models/photo';

export type SortOrder = 'ascending' | 'descending';

export interface PostListItem {
    slug: string;
    title: string;
    author: string;
    publicationDate: string;
    cover: string;
}

export interface Post extends PostListItem {
    htmlContent: string;
    photos: Photo[] | null;
}
