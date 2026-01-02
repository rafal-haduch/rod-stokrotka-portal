import path from 'path';
import fs from 'fs';

import { PhotoWithTitle } from '@/types/PhotoWithTitle';

import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';
import AnimateOnView from '@/components/AnimatedH2';
import PhotoGallery from '@/components/PhotoGallery';

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
