'use client';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';
import Link from 'next/link';
import GalleryPreview from './components/GalleryPreview';

export default function MemoriesPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Galeria</h1>
            <MainHeaderLineSeparator />
            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Zdjęcia z naszego ogrodu
                </h2>
                <GalleryPreview />
                <Link href="/gallery/photos" className="button-text mx-auto">
                    <span>Zobacz wszystkie</span>
                </Link>
            </section>
            <SectionLineSeparator />
            <section>
                <h2 ref={ref2} className={cn('h2-animate', visible2 ? 'visible' : '')}>
                    Wspomnienia z naszego ogrodu
                </h2>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
