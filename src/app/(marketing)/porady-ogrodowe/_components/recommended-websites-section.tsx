import AnimateOnView from '@/components/layout/animated-h2';
import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import DecorativeLine from '@/components/layout/decorative-line';

import { recommendedSites } from '@/content/recommended-sites';

export default function RecommendedWebsitesSection() {
    return (
        <PageSection
            {...PAGE_SECTION_PRESETS.first}
            aria-labelledby="recommended-websites-title"
            className="text-center"
        >
            <h1 id="recommended-websites-title">Porady Ogrodowe</h1>
            <DecorativeLine variant="forHeading" />
            <AnimateOnView className="h2-animate">
                <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
            </AnimateOnView>
            <h3>Polecane strony:</h3>
            <ul className="space-y-6 sm:space-y-4">
                {recommendedSites.map((item) => (
                    <li key={item.name}>
                        <p>
                            {item.name}:{' '}
                            <a
                                href={item.url}
                                className="link-visible inline-block whitespace-nowrap"
                                target="blank"
                            >
                                {item.linkContext}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </PageSection>
    );
}
