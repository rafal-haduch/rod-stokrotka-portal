import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import WorkInProgress from '@/components/layout/work-in-progress';

export default function RecommendedArticlesSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="recommended-articles-title">
            <h3 id="recommended-articles-title" className="text-center">
                Wybrane artykuły:
            </h3>
            <WorkInProgress />
        </PageSection>
    );
}
