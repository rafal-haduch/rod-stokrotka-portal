import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';

import PhotoGallery from '@/components/ui/photo-gallery';

import { galleryPhotos } from '@/content/gallery-photos';

export default function GallerySection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="gallery-title">
            <h1 id="gallery-title">Galeria Ogrodu</h1>
            <DecorativeLine variant="forHeading" />
            <AnimateOnView className="h2-animate">
                <h2>Zdjęcia przesłane przez naszych działkowców</h2>
            </AnimateOnView>
            <p className="mb-12 text-center">
                Chcesz podzielić się zdjęciami swojego ogrodu?
                <br />
                Prześlij je do administratora strony – po weryfikacji zostaną one opublikowane w
                galerii poniżej.
                <br />Z góry dziękujemy!
            </p>
            <h3 className="sr-only">Galeria zdjęć</h3>
            <PhotoGallery photos={galleryPhotos} />
        </PageSection>
    );
}
