import { SEO } from '@/config/seo';

import { NotFoundContent } from '@/components/not-found-content';

export const metadata = SEO.MY_SURVEYS;

export default function SurveysUserPage() {
    return (
        <section>
            <h2>Ankiety</h2>
            <NotFoundContent />
        </section>
    );
}
