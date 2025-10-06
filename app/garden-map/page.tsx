'use client';

import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

export default function DevelopmentPlanPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <LineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Podgląd zagospodarowania terenu
            </h2>
            <section className="flex flex-col items-center">
                <img src="/mapa-ogrodu.png" className="w-xl" />
                <a
                    href="/#"
                    download="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    className="group inline-flex items-center gap-1 rounded-lg border-2 border-green-500 bg-green-500 px-6 py-3 text-white transition hover:bg-transparent hover:text-green-500"
                >
                    <img src="/download_icon_white.svg" className="group-hover:hidden" />
                    <img src="/download_icon_green.svg" className="hidden group-hover:block" />
                    Pobierz szczegółowy plan
                </a>
                <ImageSeparator />
            </section>
        </article>
    );
}
