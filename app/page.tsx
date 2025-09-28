import LineSeparator from '@/components/LineSeparator';
import Slider from './_components/Slider';
import ImageSeparator from '@/components/ImageSeparator';
import Link from 'next/link';

export default function HomePage() {
    return (
        <article>
            <h1>Strona Główna</h1>
            <LineSeparator />
            <h2>
                Strona internetowa Stowarzyszenia Ogrodowego ,,Stokrotka" w
                Sanoku
            </h2>
            <section>
                <p>
                    Zachęcamy naszych Działkowiczów do zaglądania na stronę
                    internetową, aby być na bieżąco z ogłoszeniami związanymi z
                    naszym ogrodem. Znajdą tutaj Państwo także wszelkie
                    przydatne informacje o ogrodzie i nie tylko!{' '}
                </p>
            </section>
            <ImageSeparator />
            <section>
                <h2>Galeria</h2>
                <Slider />
            </section>
            <ImageSeparator />
            <section className="text-center">
                <h2>Ostatnie Ogłoszenia</h2>
                <Link
                    href="/announcements"
                    className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                >
                    Zobacz więcej...
                </Link>
            </section>
            <ImageSeparator />
        </article>
    );
}
