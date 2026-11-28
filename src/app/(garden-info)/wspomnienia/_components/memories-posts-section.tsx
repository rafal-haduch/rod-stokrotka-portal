import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';

import { PostListItem } from '@/features/blog/domain/blog-types';
import PostsList from '@/features/blog/ui/posts-list';
import DecorativeLine from '@/components/layout/decorative-line';
import Buttons from '@/components/dev-only/buttons';

interface MemoriesSectionProps {
    posts: PostListItem[];
}

export default function MemoriesPostsSection({ posts }: MemoriesSectionProps) {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="memories-section-title">
            <h1 id="memories-section-title">Wspomnienia</h1>
            <DecorativeLine variant="forHeading" />

            <AnimateOnView className="h2-animate">
                <h2>Historia z życia naszego ogrodu</h2>
            </AnimateOnView>

            <p className="text-center">
                Publikujemy tutaj pamiątkowe wpisy dotyczące różnych wydarzeń i historii związanych
                z naszy ogrodem.
            </p>

            <PostsList posts={posts} postBasePath={ROUTES.MEMORIES.path} />
            <div className="my-20"></div>
            <Buttons />
        </PageSection>
    );
}
