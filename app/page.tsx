'use client';

import Link from 'next/link';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';
import LineSeparator from '@/components/LineSeparator';
import Slider from './_components/Slider';
import ImageSeparator from '@/components/ImageSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import GardenMap from '@/components/GardenMap';

export default function HomePage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref3, inView: visible3 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref4, inView: visible4 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Strona Główna</h1>
            </header>

            <LineSeparator />

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Strona internetowa Stowarzyszenia Ogrodowego <br /> ,,Stokrotka" w Sanoku
                </h2>
                <p className="px-4 sm:px-20 md:px-30">
                    Zachęcamy Działkowiczów do regularnego odwiedzania naszej strony internetowej.
                    To tutaj publikujemy wszelkie ogłoszenia, informacje organizacyjne oraz
                    aktualności dotyczące życia naszego ogrodu. Znajdą tu Państwo również przydatne
                    materiały, dokumenty i porady ogrodnicze, które pomogą w codziennej pielęgnacji
                    działek i lepszym poznaniu wspólnoty ROD „Stokrotka” Sanok.
                </p>
            </section>

            <ImageSeparator />

            <section className="text-center">
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Ostatnie Ogłoszenia
                </h2>
                <WorkInProgress />
                <Link
                    href="/announcements"
                    className="mt-4 inline-block rounded-lg border-2 border-green-500 bg-green-500 px-6 py-3 text-white transition hover:bg-transparent hover:text-green-500"
                >
                    Zobacz więcej...
                </Link>
            </section>

            <ImageSeparator />

            <section>
                <h2 ref={ref3} className={cn(`h2-animate`, visible3 ? 'visible' : '')}>
                    Galeria ogrodu
                </h2>
                <Slider />
            </section>

            <ImageSeparator />

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
