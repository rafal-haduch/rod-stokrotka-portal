import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import GoogleMaps from '@/components/garden-map';
import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import LineSeparator from '@/components/line-separator';
import AnimateOnView from '@/components/animated-h2';

import GardenStats from './_components/garden-stats';
import GalleryPreview from './_components/gallery-preview';
import DescriptionSection from './_components/description-section';

export const metadata = buildMetadata(ROUTES.ABOUT_US);

export default function AboutUsPage() {
    return (
        <article>
            <h1>O Nas</h1>
            <MainHeaderLineSeparator />

            <DescriptionSection />

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród w liczbach</h2>
                </AnimateOnView>
                <GardenStats />
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród na zdjęciach</h2>
                </AnimateOnView>
                <GalleryPreview />
                <Link href="/gallery" className="btn btn-lg btn-theme mx-auto">
                    Zobacz wszystkie <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród na mapie</h2>
                </AnimateOnView>
                <GoogleMaps />
            </section>

            <ImageSeparator />
        </article>
    );
}
