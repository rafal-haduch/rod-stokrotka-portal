'use client';

import { useState } from 'react';

const slides = [
    { id: 1, src: '/slide1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/slide2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/slide3.jpg', alt: 'Slide 3' },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg z-0 shadow-xl shadow-neutral-500">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 "
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <img
                        key={slide.id}
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full flex-shrink-0"
                    />
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                ›
            </button>
        </div>
    );
}
