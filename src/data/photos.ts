import { PhotoWithoutTitle } from '@/types/PhotoWithoutTitle';
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

// /about-us <GalleryPreview/>:
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
