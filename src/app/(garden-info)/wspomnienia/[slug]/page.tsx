import { notFound } from 'next/navigation';

import { pathToMemoriesPostFiles } from '@/features/blog/domain/post-constants';
import { getPostByPath } from '@/features/blog/domain/get-post-by-path';
import PostArticle from '@/features/blog/ui/post-article';

type MemoryPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function MemoryPage({ params }: MemoryPageProps) {
    const { slug } = await params;
    const path = `${pathToMemoriesPostFiles}/${slug}.md`;
    const post = await getPostByPath(path);

    if (!post) return notFound();

    return <PostArticle post={post} />;
}
