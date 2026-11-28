import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';
import WorkInProgress from '@/components/layout/work-in-progress';

export default function GalleryGardenSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="gallery-garden-title">
            <AnimateOnView className="h2-animate">
                <h2 id="gallery-garden-title">Galeria ogrodu „Stokrotka” w Sanoku</h2>
            </AnimateOnView>
            <WorkInProgress />
            <Link href={ROUTES.GALLERY.path} className="btn btn-lg btn-primary mx-auto">
                Zobacz więcej
                <ArrowRight />
            </Link>
        </PageSection>
    );
}
