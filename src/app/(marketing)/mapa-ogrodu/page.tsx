import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import ImageLightbox from './_components/image-lightbox';
import { Download } from 'lucide-react';

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

                <a
                    href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    download
                    className="btn btn-lg btn-theme-primary mx-auto"
                >
                    <Download />
                    Pobierz szczegółowy plan
                </a>
            </section>

            <ImageSeparator />
        </article>
    );
}
