import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { importantDocuments, minutesAndReports, templatesAndForms } from '@/content/data/documents';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';
import { LineSeparator } from '@/components/line-separator';
import { ImageSeparator } from '@/components/image-separator';

import ListOfDocuments from './_components/list-of-documents';

export const metadata = buildMetadata(ROUTES.DOCUMENTS);

export default function DocumentsPage() {
    return (
        <article>
            <h1>Dokumenty</h1>
            <MainHeadingLineSeparator />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Ważne i przydatne dokumenty</h2>
                </AnimateOnView>
                <ListOfDocuments documents={importantDocuments} />
            </section>

            <LineSeparator my={'my-10'} />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Wzory i formularze</h2>
                </AnimateOnView>
                <ListOfDocuments documents={templatesAndForms} />
            </section>

            <LineSeparator my={'my-10'} />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Protokoły i sprawozdania</h2>
                </AnimateOnView>
                <ListOfDocuments documents={minutesAndReports} />
            </section>

            <ImageSeparator />
        </article>
    );
}
