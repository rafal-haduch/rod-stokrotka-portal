import path from 'path';
import fs from 'fs';

import { SEO } from '@/config/seo';

import { PhotoWithTitle } from '@/shared/models/photo';

import { AnimateOnView } from '@/components/animated-h2';
import { PhotoGallery } from '@/components/photo-gallery';
import { galleryPhotos } from '@/content/gallery-photos';
import { DecorativeLine } from '@/components/decorative-line';

export const metadata = SEO.GALLERY;

export default function GalleryPage() {
    return (
        <article>
            <h1>Galeria Ogrodu</h1>
            <DecorativeLine variant="forHeading" />

            <section className="mb-12">
                <AnimateOnView className="h2-animate">
                    <h2>Zdjęcia przesłane przez naszych działkowców</h2>
                </AnimateOnView>
                <p className="text-center">
                    Chcesz podzielić się zdjęciami swojego ogrodu?
                    <br />
                    Prześlij je do administratora strony – po weryfikacji zostaną one opublikowane w
                    galerii poniżej.
                    <br />Z góry dziękujemy!
                </p>
            </section>

            <section>
                <h2 className="sr-only">Galeria zdjęć</h2>
                <PhotoGallery photos={galleryPhotos} />
            </section>
        </article>
    );
}
