import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

import AnimateOnView from '@/components/AnimatedH2';
import PhotoGallery from '@/components/PhotoGallery';
import { gallery } from '@/data/photos';

export default function GalleryPage() {
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
                <PhotoGallery photos={gallery} />
            </section>

            <ImageSeparator />
        </article>
    );
}
