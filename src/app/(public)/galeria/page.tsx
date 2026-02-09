import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import ImageSeparator from '@/components/image-separator';

import GallerySection from './_components/gallery-section';

export const metadata = buildMetadata(ROUTES.GALLERY);

export default function GalleryPage() {
    return (
        <article>
            <h1>Galeria Ogrodu</h1>
            <MainHeaderLineSeparator />

            <GallerySection />

            <ImageSeparator />
        </article>
    );
}
