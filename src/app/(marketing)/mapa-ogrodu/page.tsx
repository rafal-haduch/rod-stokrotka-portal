import { ROUTES } from '@/shared/config/routes';

import { buildMetadata } from '@/shared/utils/build-metadata';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import ImageLightbox from './_components/image-lightbox';
import { Download } from 'lucide-react';
import { CustomButton } from '@/components/custom-button';

export const metadata = buildMetadata(ROUTES.GARDEN_MAP);

export default function GardenMapPage() {
    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <MainHeadingLineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Podgląd zagospodarowania terenu</h2>
                </AnimateOnView>

                <ImageLightbox />

                <CustomButton
                    href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    external
                    download
                    size="lg"
                    variant="primary"
                    className="mx-auto"
                >
                    <Download />
                    Pobierz szczegółowy plan
                </CustomButton>
            </section>
        </article>
    );
}
