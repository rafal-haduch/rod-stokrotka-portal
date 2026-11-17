import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

import { formatDate } from '@/shared/utils/format-date';

import { RoutePath } from '@/config/routes';

import { PostListItem } from '@/features/blog/domain/post-types';
import Link from 'next/link';

interface PostCardProps {
    post: PostListItem;
    referTo: RoutePath;
}

export default function PostCard({ post, referTo }: PostCardProps) {
    return (
        <Link
            href={`${referTo}/${post.slug}`}
            className="group post-card surface mx-auto block max-w-xl overflow-hidden"
        >
            <div className="relative h-64">
                <Image src={post.cover} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex">
                    <p className="tracking-wide text-white">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4 py-2">
                <h3 className="text-theme-on-surface text-center text-xl font-semibold group-hover:underline">
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
