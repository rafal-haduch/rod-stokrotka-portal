import { SEO } from '@/config/seo';

import { NotFoundContent } from '@/components/layout/not-found-content';

export const metadata = SEO.PANEL_DOCUMENTS;

export default async function CMSDocumentsPage() {
    return (
        <section>
            <h2>Dokumenty</h2>
            <NotFoundContent />
        </section>
    );
}
