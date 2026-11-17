import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import { PostListItem } from '@/features/blog/domain/post-types';
import PostsList from '@/features/blog/ui/posts-list';

interface MemoriesSectionProps {
    posts: PostListItem[];
}

export default function MemoriesSection({ posts }: MemoriesSectionProps) {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="title-memories-section">
            <h1 id="title-memories-section">Wspomnienia</h1>
            <MainHeadingLineSeparator />

            <AnimateOnView className="h2-animate">
                <h2>Historia z życia naszego ogrodu</h2>
            </AnimateOnView>

            <p className="text-center">
                Publikujemy tutaj pamiątkowe wpisy dotyczące różnych wydarzeń i historii o naszym
                ogrodzie.{' '}
            </p>

            <PostsList posts={posts} refTo={ROUTES.MEMORIES.path} />
        </PageSection>
    );
}
