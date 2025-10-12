'use client';

import { useEffect, useState } from 'react';

const slides = [
    { id: 1, src: '/slide1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/slide2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/slide3.jpg', alt: 'Slide 3' },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        console.log(slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // slide change every 5 seconds

        return () => clearInterval(interval); // cleaning after unmounting
    }, []);

    return (
        <div className="relative z-0 mx-auto w-full max-w-3xl overflow-hidden rounded-lg shadow-xl shadow-neutral-400">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
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
                className="absolute top-1/2 left-2 min-w-12 -translate-y-1/2 transform rounded-full bg-black p-2 text-6xl text-white opacity-60 hover:cursor-pointer hover:opacity-100"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 min-w-12 -translate-y-1/2 transform rounded-full bg-black p-2 text-6xl text-white opacity-60 hover:cursor-pointer hover:opacity-100"
            >
                ›
            </button>
        </div>
    );
}
