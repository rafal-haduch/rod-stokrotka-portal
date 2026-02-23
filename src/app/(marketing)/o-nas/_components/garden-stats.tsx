'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

interface GardenStat {
    id: number;
    label: string;
    value: number;
}

const gardenStats: GardenStat[] = [
    { id: 0, label: 'Liczba działek', value: 63 },
    { id: 1, label: 'Liczba członków', value: 63 },
    { id: 2, label: 'Rok założenia', value: 1977 },
];
// REVIEW: zrozumiec
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
        <div
            ref={sectionRef}
            className="mx-auto grid max-w-3xl grid-cols-1 place-items-center gap-12 px-4 sm:grid-cols-2"
        >
            {gardenStats.map((item, i) => (
                <div
                    key={item.id}
                    className={cn(
                        'border-theme-ui-border-extra-light bg-theme-ui-background-extra-light w-full max-w-xs rounded-2xl border-4 p-6 shadow-lg transition hover:scale-105 hover:shadow-xl',
                        item.id === 2 ? 'col-span-2' : ''
                    )}
                >
                    <p className="text-theme-ui-foreground-primary flex flex-col items-center">
                        <span className="mb-2 text-5xl font-bold">{counts[item.id]}</span>
                        <span className="font-semibold">{item.label}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}
