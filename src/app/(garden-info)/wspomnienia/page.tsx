import { SEO } from '@/config/seo';

import { memoriesPostsDirectoryPath } from '@/features/blog/domain/blog-constants';
import { getPostsFromDirectory } from '@/features/blog/domain/get-posts-from-directory';

import MemoriesPostsSection from '@/app/(garden-info)/wspomnienia/_components/memories-posts-section';

export const metadata = SEO.MEMORIES;

export default function MemoriesPage() {
    const posts = getPostsFromDirectory(memoriesPostsDirectoryPath);

    console.log(memoriesPostsDirectoryPath);

    return <MemoriesPostsSection posts={posts} />;
}
