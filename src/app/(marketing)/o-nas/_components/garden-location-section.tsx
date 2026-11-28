import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';
import GoogleMaps from '@/components/layout/google-maps';

export default function GardenLocationSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="garden-location-title">
            <AnimateOnView className="h2-animate">
                <h2 id="garden-location-title">Nasz ogród na mapie</h2>
            </AnimateOnView>
            <GoogleMaps />
        </PageSection>
    );
}
