'use client';

import { useInView } from '@/lib/hooks/useInView';
import { cn } from '@/lib/utils/cn';

import { communityGardenPhotos } from '@/data/photos';

import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';
import ImageSeparator from '@/components/ImageSeparator';

export default function CommunityGardenPhotosPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Zdjęcia Z Naszego Ogrodu</h1>
                <MainHeaderLineSeparator />
            </header>

            <section aria-labelledby="user-photos">
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Galeria zdjęć przesłanych przez naszych działkowców
                </h2>
                <p className="mb-10 text-left sm:text-center">
                    Chcesz podzielić się zdjęciami swojego ogrodu?
                    <br /> Prześlij je do administratora strony – po weryfikacji zostaną one
                    opublikowane w galerii poniżej.
                    <br /> Z góry dziękujemy!
                </p>
                <PhotoGallery photos={communityGardenPhotos} />
            </section>

            <ImageSeparator />
        </article>
    );
}
