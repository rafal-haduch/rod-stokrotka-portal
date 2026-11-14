import { SEO } from '@/config/seo';

import { WorkInProgress } from '@/components/work-in-progress';

export const metadata = SEO.DASHBOARD;

export default function DashboardPage() {
    return (
        <section>
            <h2>Panel </h2>
            <WorkInProgress />
        </section>
    );
}
