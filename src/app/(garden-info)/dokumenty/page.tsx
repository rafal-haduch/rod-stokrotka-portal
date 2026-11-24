import { SEO } from '@/config/seo';

import {
    governingAndGardenDocuments,
    meetingMinutes,
    formsAndAgreements,
} from '@/content/documents';

import { AnimateOnView } from '@/components/animated-h2';
import { DecorativeLine } from '@/components/decorative-line';

import ListOfDocuments from './_components/list-of-documents';

export const metadata = SEO.DOCUMENTS;

export default function DocumentsPage() {
    return (
        <article>
            <h1>Dokumenty</h1>
            <DecorativeLine variant="forHeading" />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Ważne i przydatne dokumenty</h2>
                </AnimateOnView>
                <ListOfDocuments documents={governingAndGardenDocuments} />
            </section>

            <DecorativeLine my={'my-10'} />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Wzory i formularze</h2>
                </AnimateOnView>
                <ListOfDocuments documents={formsAndAgreements} />
            </section>

            <DecorativeLine my={'my-10'} />

            <section>
                <AnimateOnView>
                    <h2 className="text-center">Protokoły i sprawozdania</h2>
                </AnimateOnView>
                <ListOfDocuments documents={meetingMinutes} />
            </section>
        </article>
    );
}
