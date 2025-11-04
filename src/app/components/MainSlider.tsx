'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { mainSliderPhotos } from '@/data/photos';

export default function MainSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? mainSliderPhotos.length - 1 : prev - 1));
        console.log(mainSliderPhotos.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === mainSliderPhotos.length - 1 ? 0 : prev + 1));
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
                {mainSliderPhotos.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full flex-shrink-0"
                    />
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
