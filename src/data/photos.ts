import { PhotoWithoutTitle } from '@/types/PhotoWithoutTitle';
import { PhotoWithTitle } from '@/types/PhotoWithTitle';
// TODO: change alts

// / <MainSlider/>
const mainSliderPhotosURL = '/images/main-slider/' as const;
export const mainSliderPhotos: PhotoWithoutTitle[] = [
    { src: `${mainSliderPhotosURL}placeholder-slide-1.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-2.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-3.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-4.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-5.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-6.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-7.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-8.jpg`, alt: 'alt' },
    { src: `${mainSliderPhotosURL}placeholder-slide-9.jpg`, alt: 'alt' },
];

// /gallery <GalleryPreview/>:
const galleryPreviewURL = '/images/gallery-preview-slider/' as const;
export const galleryPreview: PhotoWithoutTitle[] = [
    { src: `${galleryPreviewURL}photo-1.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-2.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-3.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-4.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-5.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-6.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-7.jpg`, alt: 'alt' },
    { src: `${galleryPreviewURL}photo-8.jpg`, alt: 'alt' },
];

// /gallery/community-garden-photos <PhotoGallery/>:
const galleryURL = '/images/external-photo-source/gallery/' as const;
export const gallery: PhotoWithTitle[] = [
    { src: `${galleryURL}photo-1.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-2.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-3.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-4.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-5.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-6.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-7.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-8.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-9.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-10.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-11.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-12.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-13.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-14.jpg`, alt: 'alt' },
    { src: `${galleryURL}photo-15.jpg`, alt: 'alt' },
];
