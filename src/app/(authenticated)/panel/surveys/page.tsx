import { SEO } from '@/config/seo';

import { WorkInProgress } from '@/components/layout/work-in-progress';

export const metadata = SEO.PANEL_SURVEYS;

export default async function CMSSurveysPagee() {
    return (
        <section>
            <h2>Ankiety</h2>
            <WorkInProgress />
        </section>
    );
}
