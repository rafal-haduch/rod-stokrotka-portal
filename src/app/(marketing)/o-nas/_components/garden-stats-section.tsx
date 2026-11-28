import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';

import GardenStatCards from '@/app/(marketing)/o-nas/_components/garden-stat-cards';

export default function GardenStatsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.between} aria-labelledby="garden-stats-title">
            <AnimateOnView className="h2-animate">
                <h2 id="garden-stats-title">Nasz ogród w liczbach</h2>
            </AnimateOnView>
            <GardenStatCards />
        </PageSection>
    );
}
