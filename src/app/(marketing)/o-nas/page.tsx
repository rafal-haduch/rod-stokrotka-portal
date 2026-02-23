import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { GoogleMaps } from '@/components/garden-map';
import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import GardenStats from './_components/garden-stats';
import GalleryPreview from './_components/gallery-preview';
import DescriptionSection from './_components/description-section';
import { CustomButton } from '@/components/custom-button';

export const metadata = buildMetadata(ROUTES.ABOUT_US);

export default function AboutUsPage() {
    return (
        <article>
            <h1>O Nas</h1>
            <MainHeadingLineSeparator />

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
                <CustomButton
                    href={ROUTES.GALLERY.path}
                    size="lg"
                    variant="primary"
                    className="mx-auto"
                >
                    Zobacz wszystkie <ArrowRight />
                </CustomButton>
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
