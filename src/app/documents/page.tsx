import { importantDocuments, minutesAndReports, templatesAndForms } from '@/data/documents';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import ListOfDocuments from './components/ListOfDocuments';
import AnimateOnView from '@/components/AnimatedH2';

export default function DocumentsPage() {
    const my = 'my-10';

    return (
        <article>
            <header>
                <h1>Dokumenty</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Oficjalne dokumenty ROD ,,Stokrotka" Sanok</h2>
                </AnimateOnView>

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
