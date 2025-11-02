'use client';

import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';
import { toTitleCase } from '@/lib/toTitleCase';

import { Memory } from '@/types/Memory';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';

export default function MemoryPageWrapper({ memory }: { memory: Memory }) {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>{toTitleCase(memory.title)}</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    {memory.date}
                </h2>
                <p className="text-left sm:text-center">{memory.text}</p>
                <PhotoGallery photos={memory.photos} />
            </section>

            <ImageSeparator />
        </article>
    );
}
