'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Download, X } from 'lucide-react';

import { cn } from '@/utils/cn';
import { useInView } from '@/hooks/useInView';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

export default function DevelopmentPlanPage() {
    // Lightbox and zoom control states
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [offsetY, setOffsetY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [startPosY, setStartPosY] = useState(0);
    const [startOffsetY, setStartOffsetY] = useState(0);

    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    const openLightbox = () => {
        setIsLightboxOpen(true);
        setZoom(1);
        setOffsetY(0);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setZoom(1);
        setOffsetY(0);
    };

    // Handle image zoom with mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom((z) => Math.min(Math.max(z + delta, 1), 5));
    };

    // Mouse drag start
    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom <= 1) return;
        setDragging(true);
        setStartPosY(e.clientY);
        setStartOffsetY(offsetY);
    };

    // Mouse dragging movement
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging) return;
        const deltaY = e.clientY - startPosY;
        setOffsetY(startOffsetY + deltaY);
    };

    // Mouse drag end
    const handleMouseUp = () => setDragging(false);

    // Disable background scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = isLightboxOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen]);

    return (
        <article>
            <header>
                <h1>Mapa Ogrodu</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Podgląd zagospodarowania terenu
                </h2>
                <Image
                    src="/images/ui/mapa-ogrodu.png"
                    alt="Podglądowa mapa ogrodu"
                    width={640}
                    height={1700}
                    onClick={openLightbox}
                    className="mx-auto w-xl hover:cursor-pointer"
                />
                <a
                    href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    download
                    className="button-icon mx-auto"
                >
                    <Download />
                    Pobierz szczegółowy plan
                </a>

                {isLightboxOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 select-none"
                        onClick={closeLightbox}
                        onWheel={handleWheel}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:cursor-pointer hover:opacity-70"
                        >
                            <X size={32} />
                        </button>

                        <div
                            className="relative flex h-[90vh] w-full max-w-6xl items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <Image
                                src="/images/ui/mapa-ogrodu.png"
                                alt="Podglądowa mapa ogrodu"
                                fill
                                draggable={false}
                                className="object-contain transition-transform duration-150"
                                style={{
                                    transform: `scale(${zoom}) translateY(${offsetY / zoom}px)`,
                                    cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'default',
                                }}
                            />
                        </div>
                    </div>
                )}
            </section>

            <ImageSeparator />
        </article>
    );
}
