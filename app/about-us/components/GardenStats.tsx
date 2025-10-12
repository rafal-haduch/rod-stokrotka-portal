'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
    label: string;
    value: number;
}

const stats: Stat[] = [
    { label: 'Liczba działek', value: 62 },
    { label: 'Liczba członków', value: 62 },
];

export default function GardenStats() {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
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

        stats.forEach((stat, i) => {
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
        <>
            <div
                ref={sectionRef}
                className="mx-auto mb-6 flex w-full flex-col items-center justify-center gap-6 px-6 md:flex-row md:gap-8"
            >
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className="flex w-xs flex-col items-center justify-center rounded-2xl border-4 border-green-500 bg-green-50 p-6 shadow-lg transition hover:scale-105 hover:shadow-xl md:max-w-sm"
                    >
                        <span className="text-5xl font-bold text-green-700">{counts[i]}</span>
                        <span className="mt-2 text-gray-700">{stat.label}</span>
                    </div>
                ))}
            </div>
            <div className="m-auto flex w-xs flex-col items-center justify-center rounded-2xl border-4 border-green-500 bg-green-50 p-6 shadow-lg transition hover:scale-105 hover:shadow-xl md:max-w-md">
                <span className="text-5xl font-bold text-green-700">Lata 80</span>
                <span className="mt-2 text-gray-700">Data założenia</span>
            </div>
        </>
    );
}
