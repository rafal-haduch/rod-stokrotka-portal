import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

import { formatDate } from '@/shared/utils/format-date';

import { RoutePath } from '@/config/routes';

import { PostListItem } from '@/features/blog/domain/blog-types';
import Link from 'next/link';

interface PostCardProps {
    post: PostListItem;
    /** Base route used to build this post's URL. */
    postBasePath: RoutePath;
}

export default function PostCard({ post, postBasePath }: PostCardProps) {
    return (
        <Link
            href={`${postBasePath}/${post.slug}`}
            className="group text-surface-content from-surface-gradient-from to-surface-gradient-to hover:from-surface-gradient-from-hover hover:to-surface-gradient-to-hover mx-auto block max-w-xl overflow-hidden bg-linear-to-br"
        >
            <div className="relative h-64">
                <Image src={post.cover} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex">
                    <p className="tracking-wide text-white">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4 py-2">
                <h3 className="text-surface-content text-center text-xl font-semibold">
                    {post.title}
                </h3>
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <Calendar />
                        <p>{formatDate(post.publicationDate)}</p>
                    </div>
                    <p>{post.author}</p>
                </div>
            </div>
        </Link>
    );
}
