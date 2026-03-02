import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { WorkInProgress } from '@/components/work-in-progress';
import { AnimateOnView } from '@/components/animated-h2';

export const metadata = buildMetadata(ROUTES.ANNOUNCEMENTS);

export default function AnnouncementsPage() {
    return (
        <>
            <h1>Ogłoszenia</h1>
            <MainHeadingLineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" w Sanoku</h2>
                </AnimateOnView>

                <WorkInProgress />
            </section>
        </>
    );
}
