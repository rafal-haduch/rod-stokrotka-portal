'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

import { importantDocuments, minutesAndReports, templatesAndForms } from '@/data/documents';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import ListOfDocuments from './components/ListOfDocuments';

export default function DocumentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const my = 'my-10';

    return (
        <article>
            <header>
                <h1>Dokumenty</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Oficjalne dokumenty ROD ,,Stokrotka" Sanok
                </h2>

                <h3 className="text-center">Ważne dokumenty</h3>
                <ListOfDocuments documents={importantDocuments} />

                <LineSeparator my={my} />

                <h3 className="text-center">Wzory i formularze</h3>
                <ListOfDocuments documents={templatesAndForms} />

                <LineSeparator my={my} />

                <h3 className="text-center">Protokoły i sprawozdania</h3>
                <ListOfDocuments documents={minutesAndReports} />
            </section>

            <ImageSeparator />
        </article>
    );
}
