'use client';

import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

import { recommendedSites } from '@/data/recommendedSites';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function GardeningGuidePage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Porady Ogrodowe</h1>
                <MainHeaderLineSeparator />
            </header>

            <section className="text-center">
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Porady, wskazówki i inspiracje dla ogrodu
                </h2>
                <h3>Polecane strony:</h3>
                <ul className="space-y-6 sm:space-y-4">
                    {recommendedSites.map((item) => (
                        <li key={item.name}>
                            <p>
                                {item.name}:{' '}
                                <a href={item.url} className="link-visible" target="blank">
                                    {item.linkContext}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <SectionLineSeparator my="my-10" />

            <section className="text-center">
                <h3>Wybrane artykuły:</h3>
                <WorkInProgress />
            </section>

            <ImageSeparator />
        </article>
    );
}
