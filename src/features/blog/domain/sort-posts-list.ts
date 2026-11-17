import { PostListItem, SortOrder } from '@/features/blog/domain/blog-types';

export function sortPostsByDate(posts: PostListItem[], order: SortOrder): PostListItem[] {
    return [...posts].sort((a, b) => {
        const dateA = new Date(a.publicationDate).getTime();
        const dateB = new Date(b.publicationDate).getTime();

        return order === 'ascending' ? dateA - dateB : dateB - dateA;
    });
}
