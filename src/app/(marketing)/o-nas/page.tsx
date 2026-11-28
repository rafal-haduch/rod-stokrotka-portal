import { SEO } from '@/config/seo';

import DecorativeLine from '@/components/layout/decorative-line';

import AboutUsSection from '@/app/(marketing)/o-nas/_components/about-us-section';
import GardenStatsSection from '@/app/(marketing)/o-nas/_components/garden-stats-section';
import GalleryPreviewSection from '@/app/(marketing)/o-nas/_components/gallery-preview-section';
import GardenLocationSection from '@/app/(marketing)/o-nas/_components/garden-location-section';

export const metadata = SEO.ABOUT_US;

export default function AboutUsPage() {
    return (
        <>
            <AboutUsSection />
            <DecorativeLine variant="forContent" />
            <GardenStatsSection />
            <DecorativeLine variant="forContent" />
            <GalleryPreviewSection />
            <DecorativeLine variant="forContent" />
            <GardenLocationSection />
        </>
    );
}
