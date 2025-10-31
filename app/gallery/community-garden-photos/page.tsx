import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '../../../components/PhotoGallery';
import { communityGardenPhotos } from '@/data/photos';
import ImageSeparator from '@/components/ImageSeparator';

export default function CommunityGardenPhotosPage() {
    return (
        <article>
            <header>
                <h1>Zdjęcia Z Naszego Ogrodu</h1>
                <MainHeaderLineSeparator />
            </header>

            <section aria-labelledby="user-photos">
                <h2>Galeria zdjęć przesłanych przez naszych działkowców</h2>
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
