import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';
import { SEO } from '@/config/seo';

import { GoogleMaps } from '@/components/google-maps';

import { DecorativeLine } from '@/components/decorative-line';
import { AnimateOnView } from '@/components/animated-h2';

import GardenStats from './_components/garden-stats';
import GalleryPreview from './_components/gallery-preview';
import DescriptionSection from './_components/description-section';
import { CustomButton } from '@/components/custom-button';

export const metadata = SEO.ABOUT_US;

export default function AboutUsPage() {
    return (
        <article>
            <h1>O Nas</h1>
            <DecorativeLine variant="forHeading" />

            <DescriptionSection />

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród w liczbach</h2>
                </AnimateOnView>
                <GardenStats />
            </section>

            <DecorativeLine variant="forContent" />

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

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród na mapie</h2>
                </AnimateOnView>
                <GoogleMaps />
            </section>
        </article>
    );
}
