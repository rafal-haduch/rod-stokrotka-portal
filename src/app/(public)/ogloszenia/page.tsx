import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import WorkInProgress from '@/components/work-in-progress';
import AnimateOnView from '@/components/animated-h2';

export const metadata = buildMetadata(ROUTES.ANNOUNCEMENTS);

export default function AnnouncementsPage() {
    return (
        <article>
            <header>
                <h1>Ogłoszenia</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" w Sanoku</h2>
                </AnimateOnView>
                <WorkInProgress />
            </section>

            <ImageSeparator />
        </article>
    );
}
