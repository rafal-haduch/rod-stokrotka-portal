'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { PhotoWithoutTitle } from '@/shared/models/photo';

const galleryPreviewImagesURL = '/images/gallery-preview-slider/' as const;
export const galleryPreviewImages: PhotoWithoutTitle[] = [
    { src: `${galleryPreviewImagesURL}photo-1.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-2.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-3.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-4.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-5.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-6.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-7.jpg`, alt: 'alt' },
    { src: `${galleryPreviewImagesURL}photo-8.jpg`, alt: 'alt' },
] as const;

export default function GalleryPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const prevImg = () => {
        setCurrentIndex((i) => (i > 0 ? i - 1 : galleryPreviewImages.length - 1));
    };

    const nextImg = () => {
        setCurrentIndex((i) => (i < galleryPreviewImages.length - 1 ? i + 1 : 0));
    };

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollAmount = 200; // px
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        const activeThumbnail = container.children[currentIndex] as HTMLElement;
        if (!activeThumbnail) return;

        const containerRect = container.getBoundingClientRect();
        const thumbnailRect = activeThumbnail.getBoundingClientRect();

        // Jeśli miniatura wychodzi poza widok, przewiń tak, by ją wyrównać
        if (thumbnailRect.left < containerRect.left) {
            container.scrollBy({
                left: thumbnailRect.left - containerRect.left - 10,
                behavior: 'smooth',
            });
        } else if (thumbnailRect.right > containerRect.right) {
            container.scrollBy({
                left: thumbnailRect.right - containerRect.right + 10,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className="mb-8 flex flex-col items-center">
            {/* Główne zdjęcie */}
            <div className="relative aspect-video w-full max-w-3xl">
                {/* Strzałki */}
                <button
                    onClick={() => prevImg()}
                    className="absolute top-1/2 left-4 z-10 h-20 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow hover:cursor-pointer hover:bg-white"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => nextImg()}
                    className="absolute top-1/2 right-4 z-10 h-20 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow hover:cursor-pointer hover:bg-white"
                >
                    <ChevronRight size={20} />
                </button>
                <Image
                    src={galleryPreviewImages[currentIndex].src}
                    alt={galleryPreviewImages[currentIndex].alt || ''}
                    fill
                    className="rounded-t-2xl object-cover shadow-lg"
                />
            </div>

            {/* Pasek miniatur z przewijaniem */}
            <div className="relative w-full max-w-3xl rounded-b-2xl bg-slate-200 px-6 py-4">
                {/* Strzałki */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:cursor-pointer hover:bg-white"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:cursor-pointer hover:bg-white"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Miniatury */}
                <div
                    ref={scrollRef}
                    className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth"
                >
                    {galleryPreviewImages.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`relative h-16 w-24 shrink-0 border-4 hover:cursor-pointer ${
                                i === currentIndex ? 'border-teal-300' : 'border-transparent'
                            } overflow-hidden rounded-lg`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt || ''}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
