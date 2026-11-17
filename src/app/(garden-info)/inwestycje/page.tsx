import { SEO } from '@/config/seo';

import { investmentPostsDirectoryPath } from '@/features/blog/domain/blog-constants';
import { getPostsFromDirectory } from '@/features/blog/domain/get-posts-from-directory';

import InvestmentsPostsSection from '@/app/(garden-info)/inwestycje/_components/investments-posts-section';

export const metadata = SEO.INVESTMENTS;

export default function InvestmentsPage() {
    const posts = getPostsFromDirectory(investmentPostsDirectoryPath);

    return <InvestmentsPostsSection posts={posts} />;
}
