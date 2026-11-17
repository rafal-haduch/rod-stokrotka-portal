import { PostListItem } from '@/features/blog/domain/post-types';

export function sortPostsByDate(posts: PostListItem[], order: 'asc' | 'desc'): PostListItem[] {
    return [...posts].sort((a, b) => {
        const dateA = new Date(a.publicationDate).getTime();
        const dateB = new Date(b.publicationDate).getTime();

        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
}
