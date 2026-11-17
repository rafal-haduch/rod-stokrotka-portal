import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import { PostListItem } from '@/features/blog/domain/blog-types';
import PostsList from '@/features/blog/ui/posts-list';

interface MemoriesSectionProps {
    posts: PostListItem[];
}

export default function MemoriesPostsSection({ posts }: MemoriesSectionProps) {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="memories-section-title">
            <h1 id="memories-section-title">Wspomnienia</h1>
            <MainHeadingLineSeparator />

            <AnimateOnView className="h2-animate">
                <h2>Historia z życia naszego ogrodu</h2>
            </AnimateOnView>

            <p className="text-center">
                Publikujemy tutaj pamiątkowe wpisy dotyczące różnych wydarzeń i historii związanych
                z naszy ogrodem.
            </p>

            <PostsList posts={posts} refTo={ROUTES.MEMORIES.path} />
        </PageSection>
    );
}
