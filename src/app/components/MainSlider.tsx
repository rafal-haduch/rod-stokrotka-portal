'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { PhotoWithoutTitle } from '@/types/PhotoWithoutTitle';

// TODO: change alts
const mainSliderImagesURL = '/images/main-slider/' as const;
export const mainSliderImages: PhotoWithoutTitle[] = [
    { src: `${mainSliderImagesURL}placeholder-slide-1.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-2.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-3.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-4.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-5.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-6.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-7.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-8.jpg`, alt: 'alt' },
    { src: `${mainSliderImagesURL}placeholder-slide-9.jpg`, alt: 'alt' },
] as const;

export default function MainSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? mainSliderImages.length - 1 : prev - 1));
        console.log(mainSliderImages.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === mainSliderImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // slide change every 5 seconds

        return () => clearInterval(interval); // cleaning after unmounting
    }, []);

    return (
        <div className="relative z-0 mx-auto mb-16 w-full max-w-3xl overflow-hidden rounded-lg shadow-xl shadow-neutral-400">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {mainSliderImages.map((slide, i) => (
                    <img key={i} src={slide.src} alt={slide.alt} className="w-full flex-shrink-0" />
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 min-w-12 -translate-y-1/2 transform rounded-full bg-black p-2 text-white opacity-60 hover:cursor-pointer hover:opacity-100"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 min-w-12 -translate-y-1/2 transform rounded-full bg-black p-2 text-white opacity-60 hover:cursor-pointer hover:opacity-100"
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
}
