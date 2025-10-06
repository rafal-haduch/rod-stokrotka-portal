'use client';
import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

export default function ManagementPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Zarząd</h1>
            <LineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Obecny skład zarządu ROD ,,Stokrotka''
            </h2>
            <section className="mb-10 text-center">
                <p>
                    1. Imię Nazwisko - prezes <br />
                    2. Imię Nazwisko - wiceprezes <br />
                    3. Imię Nazwisko - sekretarz <br />
                    4. Imię Nazwisko - skarbnik
                </p>
            </section>
            <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                Komisja Rewizyjna
            </h2>
            <section className="mb-20 text-center">
                <p>
                    1. Imię Nazwisko - <br />
                    2. Imię Nazwisko - <br />
                    3. Imię Nazwisko - <br />
                </p>
            </section>
            <aside className="text-center">
                <p>Stan na dzień: 17.05.2025</p>
            </aside>
            <ImageSeparator />
        </article>
    );
}
