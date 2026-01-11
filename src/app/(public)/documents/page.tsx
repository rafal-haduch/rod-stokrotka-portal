import { importantDocuments, minutesAndReports, templatesAndForms } from '@/content/data/documents';

import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import LineSeparator from '@/components/line-separator';
import AnimateOnView from '@/components/animated-h2';

import ListOfDocuments from './_components/list-of-documents';

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

                <h3 className="text-center">Ważne i przydatne dokumenty</h3>
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
