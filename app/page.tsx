'use client';

import Link from 'next/link';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import MainSlider from './components/MainSlider';
import ImageSeparator from '@/components/ImageSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import GardenMap from '@/components/GardenMap';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref3, inView: visible3 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref4, inView: visible4 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Strona Główna</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Strona internetowa ROD ,,Stokrotka'' w Sanoku
                </h2>
                <p className="mb-8 text-left sm:text-center">
                    Zachęcamy Działkowców do odwiedzania naszej strony internetowej poświęconej
                    Stowarzyszeniu Ogrodowemu „Stokrotka” w Sanoku. Tutaj publikujemy ogłoszenia,
                    informacje organizacyjne oraz aktualności dotyczące życia naszego ogrodu. Znajdą
                    tu Państwo również przydatne materiały i dokumenty, ciekawe zdjęcia oraz porady
                    ogrodowe, które pomogą w pielęgnacji działek.
                </p>
                <Link
                    href="/about-us"
                    title="Dowiedz się więcej o nas"
                    className="button-icon mx-auto"
                >
                    Dowiedz się więcej o nas
                    <ArrowRight />
                </Link>
            </section>

            <SectionLineSeparator />

            <section>
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Ostatnie Ogłoszenia
                </h2>
                <WorkInProgress />
                <Link
                    href="/announcements"
                    title="Zobacz więcej ogłoszeń"
                    className="button-icon mx-auto"
                >
                    Zobacz więcej
                    <ArrowRight />
                </Link>
            </section>

            <SectionLineSeparator />

            <section>
                <h2 ref={ref3} className={cn(`h2-animate`, visible3 ? 'visible' : '')}>
                    Galeria ogrodu „Stokrotka” w Sanoku
                </h2>
                <MainSlider />
                <Link href="/gallery" title="Zobacz więcej zdjęć" className="button-icon mx-auto">
                    Zobacz więcej
                    <ArrowRight />
                </Link>
            </section>

            <SectionLineSeparator />

            <section>
                <h2 ref={ref4} className={cn(`h2-animate`, visible4 ? 'visible' : '')}>
                    Gdzie dokładnie jest ogród
                </h2>
                <GardenMap />
            </section>

            <ImageSeparator />
        </article>
    );
}
