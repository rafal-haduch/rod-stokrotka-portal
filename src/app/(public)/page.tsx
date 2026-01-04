import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import GardenMap from '@/components/GardenMap';
import LineSeparator from '@/components/LineSeparator';
import AnimateOnView from '@/components/AnimatedH2';

//import MainSlider from './components/MainSlider';

export default function HomePage() {
    return (
        <article>
            <header>
                <h1>Strona Główna</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Strona internetowa ROD ,,Stokrotka'' w Sanoku</h2>
                </AnimateOnView>
                <p className="mb-8 text-left sm:text-center">
                    Zachęcamy Działkowców do odwiedzania naszej strony internetowej poświęconej
                    Rodzinnym Ogrodom Działkowym „Stokrotka” w Sanoku. Tutaj publikujemy ogłoszenia,
                    informacje organizacyjne oraz aktualności dotyczące życia naszego ogrodu. Znajdą
                    tu Państwo również przydatne materiały i dokumenty, ciekawe zdjęcia oraz porady
                    ogrodowe, które pomogą w pielęgnacji działek.
                </p>
                <Link href="/about-us" className="btn btn-lg btn-theme mx-auto">
                    Dowiedz się więcej o nas <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ostatnie Ogłoszenia</h2>
                </AnimateOnView>
                <WorkInProgress />
                <Link
                    href="/announcements"
                    title="Zobacz więcej ogłoszeń"
                    className="btn btn-lg btn-theme mx-auto"
                >
                    Zobacz więcej
                    <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Galeria ogrodu „Stokrotka” w Sanoku</h2>
                </AnimateOnView>
                <WorkInProgress />
                {/* <MainSlider /> */}
                <Link
                    href="/gallery"
                    title="Zobacz więcej zdjęć"
                    className="btn btn-lg btn-theme mx-auto"
                >
                    Zobacz więcej
                    <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section aria-label="Lokalizacja ogrodu">
                <AnimateOnView className="h2-animate">
                    <h2>Gdzie dokładnie jest ogród</h2>
                </AnimateOnView>
                <GardenMap />
            </section>

            <ImageSeparator />
        </article>
    );
}
