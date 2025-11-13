'use client';

import { cn } from '@/utils/cn';
import { useInView } from '@/hooks/useInView';

import { Investment } from '@/types/Investment';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';

export default function InvestmentPageWrapper({ investment }: { investment: Investment }) {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>{investment.title}</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    {investment.date}
                </h2>
                <p className="text-left sm:text-center">{investment.text}</p>
                <PhotoGallery photos={investment.photos} />
            </section>

            <ImageSeparator />
        </article>
    );
}
