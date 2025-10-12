'use client';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

export default function DevelopmentPlanPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Podgląd zagospodarowania terenu
            </h2>
            <section className="flex flex-col items-center">
                <img src="/mapa-ogrodu.png" className="w-xl" />
                <a
                    href="/#"
                    download="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    className="button-icon"
                >
                    <img src="/download_green_24.svg" />
                    Pobierz szczegółowy plan
                </a>
                <ImageSeparator />
            </section>
        </article>
    );
}
