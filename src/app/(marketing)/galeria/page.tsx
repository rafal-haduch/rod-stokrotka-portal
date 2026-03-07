import path from 'path';
import fs from 'fs';

import { ROUTES } from '@/shared/config/routes';

import { PhotoWithTitle } from '@/shared/models/photo';

import { buildMetadata } from '@/shared/utils/build-metadata';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';
import { PhotoGallery } from '@/components/photo-gallery';

export const metadata = buildMetadata(ROUTES.GALLERY);

export default function GalleryPage() {
    const filePath = path.join(process.cwd(), 'src/content/data/gallery.json');
    const file = fs.readFileSync(filePath, 'utf8');
    const photos: PhotoWithTitle[] = JSON.parse(file);

    return (
        <article>
            <h1>Galeria Ogrodu</h1>
            <MainHeadingLineSeparator />

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
                <PhotoGallery photos={photos} />
            </section>
        </article>
    );
}
