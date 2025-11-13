'use client';

import { cn } from '@/utils/cn';
import { useInView } from '@/hooks/useInView';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function AnnouncementsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Ogłoszenia</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Ogłoszenia Zarządu ROD ,,Stokrotka" w Sanoku
                </h2>
                <WorkInProgress />
            </section>

            <ImageSeparator />
        </article>
    );
}
