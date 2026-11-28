import { SEO } from '@/config/seo';

import { WorkInProgress } from '@/components/layout/work-in-progress';
import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';

export const metadata = SEO.ANNOUNCEMENTS;

export default function AnnouncementsPage() {
    return (
        <>
            <h1>Ogłoszenia</h1>
            <DecorativeLine variant="forHeading" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" w Sanoku</h2>
                </AnimateOnView>

                <WorkInProgress />
            </section>
        </>
    );
}
