import { SEO } from '@/config/seo';

import { NotFoundContent } from '@/components/not-found-content';

export const metadata = SEO.CMS_DOCUMENTS;

export default async function CMSDocumentsPage() {
    return (
        <section>
            <h2>Dokumenty</h2>
            <NotFoundContent />
        </section>
    );
}
