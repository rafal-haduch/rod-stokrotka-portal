import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import AnimateOnView from '@/components/animated-h2';

import ImageLightbox from './_components/image-lightbox';

export const metadata = buildMetadata(ROUTES.GARDEN_MAP);

export default function GardenMapPage() {
    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <MainHeaderLineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Podgląd zagospodarowania terenu</h2>
                </AnimateOnView>

                <ImageLightbox />
            </section>

            <ImageSeparator />
        </article>
    );
}
