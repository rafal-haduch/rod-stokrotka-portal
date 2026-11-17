'use client';

import { cn } from '@/shared/utils/cn';

import { RoutePath } from '@/config/routes';

import { NotFoundContent } from '@/components/not-found-content';

import PostCard from '@/features/blog/ui/post-card';
import { useState } from 'react';
import { sortPostsByDate } from '@/features/blog/domain/sort-posts-list';
import { PostListItem, SortOrder } from '@/features/blog/domain/blog-types';

interface PostsListProps {
    posts: PostListItem[];
    refTo: RoutePath;
}

export default function PostsList({ posts, refTo }: PostsListProps) {
    const [sortByDate, setSortByDate] = useState<SortOrder>('descending');

    if (posts.length === 0) return <NotFoundContent />;

    const sortedPosts =
        sortByDate === 'descending'
            ? sortPostsByDate(posts, 'descending')
            : sortPostsByDate(posts, 'ascending');

    return (
        <div>
            <div className="flex justify-end gap-1 p-4">
                <label htmlFor="sort-by-date" className="">
                    Sortuj:
                </label>
                <select
                    id="sort-by-date"
                    value={sortByDate}
                    onChange={(event) => setSortByDate(event.target.value as SortOrder)}
                >
                    <option value="descending">Najnowsze</option>
                    <option value="ascending">Najstarsze</option>
                </select>
            </div>

            <div
                className={cn(
                    posts.length === 1
                        ? 'grid grid-cols-1 justify-items-center'
                        : 'grid grid-cols-1 justify-items-center gap-14 lg:grid-cols-2'
                )}
            >
                {sortedPosts.map((post, i) => (
                    <article key={i} className="w-full max-w-xl">
                        <PostCard post={post} referTo={refTo} />
                    </article>
                ))}
            </div>
        </div>
    );
}
