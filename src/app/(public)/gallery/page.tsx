import path from 'path';
import fs from 'fs';

import { PhotoWithTitle } from '@/types/photo';

import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import ImageSeparator from '@/components/image-separator';
import AnimateOnView from '@/components/animated-h2';
import PhotoGallery from '@/components/photo-gallery';

export default function GalleryPage() {
    const filePath = path.join(process.cwd(), 'src/content/data/gallery.json');
    const file = fs.readFileSync(filePath, 'utf8');
    const photos: PhotoWithTitle[] = JSON.parse(file);

    return (
        <article>
            <header>
                <h1>Galeria</h1>
                <MainHeaderLineSeparator />
            </header>

            <section aria-labelledby="user-photos">
                <AnimateOnView className="h2-animate">
                    <h2>Galeria zdjęć przesłanych przez naszych działkowców</h2>
                </AnimateOnView>
                <p className="mb-10 text-left sm:text-center">
                    Chcesz podzielić się zdjęciami swojego ogrodu?
                    <br /> Prześlij je do administratora strony – po weryfikacji zostaną one
                    opublikowane w galerii poniżej.
                    <br /> Z góry dziękujemy!
                </p>
                <PhotoGallery photos={photos} />
            </section>

            <ImageSeparator />
        </article>
    );
}
