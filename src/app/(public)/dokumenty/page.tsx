import { importantDocuments, minutesAndReports, templatesAndForms } from '@/content/data/documents';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import ListOfDocuments from './_components/list-of-documents';
import { buildMetadata } from '@/lib/metadata';
import { ROUTES } from '@/constants/routes';

export const metadata = buildMetadata(ROUTES.DOCUMENTS);

export default function DocumentsPage() {
    const my = 'my-10';

    return (
        <article>
            <h1>Dokumenty</h1>
            <MainHeadingLineSeparator />

            {/* FIXME: HTML structure */}
            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Oficjalne dokumenty ROD ,,Stokrotka'' Sanok</h2>
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
