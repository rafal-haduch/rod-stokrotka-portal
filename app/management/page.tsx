'use client';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

export default function ManagementPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Zarząd</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Obecna struktura Stowarzyszenia Ogrodowego
                <br /> ,,Stokrotka'' w Sanoku
            </h2>
            <section className="mb-10 text-center">
                <h3>Zarząd:</h3>
                <p className="mb-10">
                    1. Maciej Uruski - prezes <br />
                    2. Zbigniew Gajda - wiceprezes <br />
                    3. Katarzyna Wojdyła - sekretarz <br />
                    4. Urszula Martuszewska - skarbnik
                </p>
                <h3>Komisja rewizyjna:</h3>
                <p className="mb-10">
                    1. Krystyna Wojtowicz - przewodnicząca <br />
                    2. Renata Olbert - ? <br />
                    3. Piotr Kaliniecki - ? <br />
                </p>
                <p className="mb-10">Stan na dzień: 17.05.2025</p>
                <SectionLineSeparator my="my-10" />
                <h3>Administrator strony:</h3>
                <p>Rafał Haduch</p>
            </section>
            <ImageSeparator />
        </article>
    );
}
