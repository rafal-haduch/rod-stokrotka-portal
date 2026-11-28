import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';

import GalleryPreviewSlider from '@/app/(marketing)/o-nas/_components/gallery-preview-slider';

export default function GalleryPreviewSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.between} aria-labelledby="gallery-preview-title">
            <AnimateOnView className="h2-animate">
                <h2 id="gallery-preview-title">Nasz ogród na zdjęciach</h2>
            </AnimateOnView>
            <GalleryPreviewSlider />
            <Link href={ROUTES.GALLERY.path} className="btn btn-lg btn-primary mx-auto">
                Zobacz wszystkie <ArrowRight />
            </Link>
        </PageSection>
    );
}
