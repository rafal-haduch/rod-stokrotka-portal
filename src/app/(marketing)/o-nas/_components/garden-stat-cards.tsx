'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/utils/cn';

interface GardenStatsItem {
    id: number;
    label: string;
    value: number;
}

const gardenStats = [
    { id: 0, label: 'Liczba działek', value: 63 },
    { id: 1, label: 'Liczba członków', value: 63 },
    { id: 2, label: 'Rok założenia', value: 1977 },
] as const satisfies GardenStatsItem[];

// REVIEW: understand the code
export default function GardenStatCards() {
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
            { threshold: 0.4 }
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

        const animationDuration = 1500; // ms
        const frameRate = 30;
        const totalFrames = Math.round((animationDuration / 1000) * frameRate);

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
            className="mx-auto grid max-w-3xl grid-cols-1 place-items-center gap-12 sm:grid-cols-2"
        >
            {gardenStats.map((item, i) => (
                <div
                    key={item.id}
                    className={cn(
                        'from-surface-gradient-from to-surface-gradient-to border-surface-border w-full max-w-xs rounded-lg border-2 bg-linear-to-br p-6 shadow-md',
                        item.id === 2 ? 'col-span-2' : ''
                    )}
                >
                    <p className="text-surface-content flex flex-col items-center">
                        <span className="mb-2 text-5xl font-bold">{counts[item.id]}</span>
                        <span className="font-semibold">{item.label}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}
