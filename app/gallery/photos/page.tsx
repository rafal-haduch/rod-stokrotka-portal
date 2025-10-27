import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '../../../components/PhotoGallery';
import { photoGalleryImg } from '@/data';

export default function PhotosPage() {
    return (
        <article>
            <h1>Zdjęcia Z Naszego Ogrodu</h1>
            <MainHeaderLineSeparator />
            <h2>Galeria zdjęć przesłanych przez naszych działkowiczów</h2>
            <PhotoGallery photos={photoGalleryImg} />
        </article>
    );
}
