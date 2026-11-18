'use client';

import { useState } from 'react';

import { cn } from '@/shared/utils/cn';

import { RoutePath } from '@/config/routes';

import { NotFoundContent } from '@/components/not-found-content';

import { sortPostsByDate } from '@/features/blog/domain/sort-posts-list';
import { PostListItem, SortOrder } from '@/features/blog/domain/blog-types';

import PostCard from '@/features/blog/ui/post-card';

interface PostsListProps {
    posts: PostListItem[];
    /** Base route used to build links to posts. */
    postBasePath: RoutePath;
}

export default function PostsList({ posts, postBasePath }: PostsListProps) {
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
                        <PostCard post={post} postBasePath={postBasePath} />
                    </article>
                ))}
            </div>
        </div>
    );
}
