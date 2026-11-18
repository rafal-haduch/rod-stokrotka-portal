import { notFound } from 'next/navigation';

import { memoriesPostsDirectoryPath } from '@/features/blog/domain/blog-constants';
import { getPostsFromDirectory } from '@/features/blog/domain/get-posts-from-directory';
import { getPostByPath } from '@/features/blog/domain/get-post-by-path';

import PostArticle from '@/features/blog/ui/post-article';

export const dynamicParams = false;

export function generateStaticParams() {
    const posts = getPostsFromDirectory(memoriesPostsDirectoryPath);
    return posts.map(({ slug }) => ({ slug }));
}

interface MemoryPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function MemoryPostPage({ params }: MemoryPostPageProps) {
    const { slug } = await params;
    const pathToPostFile = `${memoriesPostsDirectoryPath}/${slug}.md`;
    const post = await getPostByPath(pathToPostFile);

    if (!post) return notFound();

    return <PostArticle post={post} />;
}
