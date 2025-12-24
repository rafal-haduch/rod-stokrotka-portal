'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { PhotoWithTitle } from '@/types/PhotoWithTitle';
import { PhotoWithoutTitle } from '@/types/PhotoWithoutTitle';

interface PhotoGalleryProps {
    photos: PhotoWithTitle[] | PhotoWithoutTitle[];
}

export default function PhotoGallery(props: PhotoGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const photos = props.photos || [];

    const openLightbox = (index: number) => setCurrentIndex(index);
    const closeLightbox = () => setCurrentIndex(null);

    const showPrev = () =>
        setCurrentIndex((i) => (i !== null ? (i > 0 ? i - 1 : photos.length - 1) : 0));

    const showNext = () =>
        setCurrentIndex((i) => (i !== null ? (i < photos.length - 1 ? i + 1 : 0) : 0));

    // Auto-scroll thumbnails to the currently displayed photo
    useEffect(() => {
        if (scrollRef.current && currentIndex !== null) {
            const thumbnail = scrollRef.current.children[currentIndex];
            thumbnail?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }, [currentIndex]);

    // Block scroll when lightbox is open
    useEffect(() => {
        if (currentIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup in case of component unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [currentIndex]);

    return (
        <div className="w-full">
            {/* Photo grid layout */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((img, i) => (
                    <div
                        key={i}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => openLightbox(i)}
                    >
                        <Image
                            src={photos[i].src}
                            alt={`photo-${i}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 25vw, 20vw"
                            className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {currentIndex !== null && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-2 right-2 p-4 text-white hover:cursor-pointer hover:opacity-80 sm:p-1"
                    >
                        <X size={32} />
                    </button>

                    {/* Displayed photo */}
                    <div className="relative flex w-full max-w-5xl items-center justify-center">
                        <div className="relative flex h-[70vh] w-full items-center justify-center">
                            <Image
                                src={photos[currentIndex].src}
                                alt={`large-${currentIndex}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <button
                            onClick={showPrev}
                            className="absolute left-2 transform text-white hover:cursor-pointer hover:opacity-80"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            onClick={showNext}
                            className="absolute right-2 transform text-white hover:cursor-pointer hover:opacity-80"
                        >
                            <ChevronRight size={40} />
                        </button>
                    </div>

                    <div className="mt-4 text-sm text-white">
                        {currentIndex + 1} / {photos.length}
                    </div>

                    {/* Thumbnail bar */}
                    <div
                        ref={scrollRef}
                        className="no-scrollbar mt-4 flex w-full max-w-5xl gap-2 overflow-x-auto px-4"
                    >
                        {photos.map((src, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 ${
                                    i === currentIndex
                                        ? 'border-3 border-white'
                                        : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={photos[i].src}
                                    alt={`thumb-${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
