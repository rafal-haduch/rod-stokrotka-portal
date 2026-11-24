import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';

import { AnimateOnView } from '@/components/animated-h2';

import { PostListItem } from '@/features/blog/domain/blog-types';
import PostsList from '@/features/blog/ui/posts-list';
import { DecorativeLine } from '@/components/decorative-line';

interface InvestmentsPostsSectionProps {
    posts: PostListItem[];
}

export default function InvestmentsPostsSection({ posts }: InvestmentsPostsSectionProps) {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="memories-section-title">
            <h1 id="memories-section-title">Inwestycje</h1>
            <DecorativeLine variant="forHeading" />

            <AnimateOnView className="h2-animate">
                <h2>Prace i modernizacje wykonane w naszym ogrodzie</h2>
            </AnimateOnView>

            <p className="text-center">
                Publikujemy tutaj wpisy dotyczące zrealizowanych większych inwestycji i projektów na
                terenie naszego ogrodu.
            </p>

            <PostsList posts={posts} postBasePath={ROUTES.INVESTMENTS.path} />
        </PageSection>
    );
}
