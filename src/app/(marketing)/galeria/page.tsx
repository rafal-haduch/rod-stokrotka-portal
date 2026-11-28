import { SEO } from '@/config/seo';

import GallerySection from '@/app/(marketing)/galeria/_components/gallery-section';

export const metadata = SEO.GALLERY;

export default function GalleryPage() {
    return <GallerySection />;
}
