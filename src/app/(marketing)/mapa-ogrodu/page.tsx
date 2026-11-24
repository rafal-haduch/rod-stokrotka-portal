import { SEO } from '@/config/seo';

import { AnimateOnView } from '@/components/animated-h2';

import ImageLightbox from './_components/image-lightbox';
import { Download } from 'lucide-react';
import { CustomButton } from '@/components/custom-button';
import { DecorativeLine } from '@/components/decorative-line';

export const metadata = SEO.GARDEN_MAP;

export default function GardenMapPage() {
    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <DecorativeLine variant="forHeading" />

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
