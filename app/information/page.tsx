'use client';

import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

import InformationsList from './components/InformationsList';

export default function InformationPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Informacje</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Najważniejsze informacje organizacyjne
                </h2>
                <InformationsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
