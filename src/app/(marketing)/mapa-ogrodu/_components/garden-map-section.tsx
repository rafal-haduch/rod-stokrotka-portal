import Link from 'next/link';
import { Download } from 'lucide-react';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';

import GardenMapImgLightbox from '@/app/(marketing)/mapa-ogrodu/_components/garden-map-img-lightbox';

export default function GardenMapSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="garden-map-title">
            <h1 id="garden-map-title">Mapa Ogrodu</h1>
            <DecorativeLine variant="forHeading" />
            <AnimateOnView className="h2-animate">
                <h2>Podgląd zagospodarowania terenu</h2>
            </AnimateOnView>
            <GardenMapImgLightbox />
            <Link
                href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                className="btn btn-lg btn-outline mx-auto"
            >
                <Download />
                Pobierz szczegółowy plan
            </Link>
        </PageSection>
    );
}
