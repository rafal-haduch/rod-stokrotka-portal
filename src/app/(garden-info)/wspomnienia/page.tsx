import { SEO } from '@/config/seo';

import { pathToMemoriesPostFiles } from '@/features/blog/domain/post-constants';
import { getPostsFromDirectory } from '@/features/blog/domain/get-posts-from-directory';

import MemoriesSection from '@/app/(garden-info)/wspomnienia/_components/memories-section';

export const metadata = SEO.MEMORIES;

export default function MemoriesPage() {
    const posts = getPostsFromDirectory(pathToMemoriesPostFiles);

    return <MemoriesSection posts={posts} />;
}
