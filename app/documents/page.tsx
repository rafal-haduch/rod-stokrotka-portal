'use client';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import ListOfDocuments from './components/ListOfDocuments';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

export default function DocumentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Dokumenty</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Oficjalne dokumenty ROD ,,Stokrotka" Sanok
            </h2>
            <section className="flex justify-center">
                <ListOfDocuments />
            </section>
            <ImageSeparator />
        </article>
    );
}
