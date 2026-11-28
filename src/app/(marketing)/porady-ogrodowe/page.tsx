import { SEO } from '@/config/seo';

import DecorativeLine from '@/components/layout/decorative-line';

import RecommendedWebsitesSection from '@/app/(marketing)/porady-ogrodowe/_components/recommended-websites-section';
import RecommendedArticlesSection from '@/app/(marketing)/porady-ogrodowe/_components/recommended-articles-section';

export const metadata = SEO.GARDENING_GUIDE;

export default function GardeningGuidePage() {
    return (
        <>
            <RecommendedWebsitesSection />
            <DecorativeLine variant="forContent" />
            <RecommendedArticlesSection />
        </>
    );
}
