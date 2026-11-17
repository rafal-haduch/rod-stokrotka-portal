import { Photo } from '@/shared/models/photo';

export interface PostListItem {
    slug: string;
    title: string;
    author: string;
    publicationDate: string;
    cover: string;
}

export interface Post extends PostListItem {
    content: string;
    photos: Photo[] | null;
}
