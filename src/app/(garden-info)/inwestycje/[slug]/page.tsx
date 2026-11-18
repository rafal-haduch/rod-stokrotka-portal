import { notFound } from 'next/navigation';

import { investmentPostsDirectoryPath } from '@/features/blog/domain/blog-constants';
import { getPostsFromDirectory } from '@/features/blog/domain/get-posts-from-directory';
import { getPostByPath } from '@/features/blog/domain/get-post-by-path';

import PostArticle from '@/features/blog/ui/post-article';

export const dynamicParams = false;

export function generateStaticParams() {
    const posts = getPostsFromDirectory(investmentPostsDirectoryPath);
    return posts.map(({ slug }) => ({ slug }));
}

interface InvestmentPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function InvestmentPostPage({ params }: InvestmentPostPageProps) {
    const { slug } = await params;
    const pathToPostFile = `${investmentPostsDirectoryPath}/${slug}.md`;
    const post = await getPostByPath(pathToPostFile);

    if (!post) return notFound();

    return <PostArticle post={post} />;
}
