'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

interface GardenStat {
    label: string;
    value: number;
}

const gardenStats: GardenStat[] = [
    { label: 'Liczba działek', value: 63 },
    { label: 'Liczba członków', value: 63 },
    { label: 'Rok założenia', value: 1977 },
];

export default function GardenStats() {
    const [counts, setCounts] = useState<number[]>(gardenStats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.4 } // 40% widoczności sekcji
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        const duration = 1500; // czas trwania animacji (ms)
        const frameRate = 30;
        const totalFrames = Math.round((duration / 1000) * frameRate);

        gardenStats.forEach((stat, i) => {
            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                const current = Math.floor(stat.value * eased);
                setCounts((prev) => {
                    const updated = [...prev];
                    updated[i] = current;
                    return updated;
                });
                if (frame === totalFrames) clearInterval(counter);
            }, 1000 / frameRate);
        });
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="mx-auto mb-6 flex w-full flex-col items-center px-6">
            {/* Górny rząd */}
            <div className="mb-6 flex flex-col items-center gap-6 md:flex-row md:gap-8">
                {gardenStats.slice(0, 2).map((item, i) => (
                    <div
                        key={item.label}
                        className={cn(
                            'flex w-xs flex-col items-center',
                            'p-6',
                            'border-theme-ui-border-light bg-theme-ui-bg-light rounded-2xl border-4 shadow-lg',
                            'transition hover:scale-105 hover:shadow-xl',
                            'md:max-w-sm'
                        )}
                    >
                        <span className="text-theme-txt mb-2 text-5xl font-bold">{counts[i]}</span>
                        <span className="text-theme-txt">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Dolny rząd  */}
            <div className="flex items-center justify-center">
                <div
                    className={cn(
                        'flex w-xs flex-col items-center',
                        'p-6',
                        'border-theme-ui-border-light bg-theme-ui-bg-light rounded-2xl border-4 shadow-lg',
                        'transition hover:scale-105 hover:shadow-xl',
                        'md:max-w-sm'
                    )}
                >
                    <span className="text-theme-txt mb-2 text-5xl font-bold">{counts[2]}</span>
                    <span className="text-theme-txt">{gardenStats[2].label}</span>
                </div>
            </div>
        </div>
    );
}
