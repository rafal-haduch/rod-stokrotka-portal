import DecorativeLine from '@/components/layout/decorative-line';

import WelcomeSection from '@/app/(marketing)/_components/welcome-section';
import LatestAnnouncementsSection from '@/app/(marketing)/_components/latest-annuncements-section';
import GalleryGardenSection from '@/app/(marketing)/_components/gallery-garden-section';

export default function HomePage() {
    return (
        <>
            <WelcomeSection />
            <DecorativeLine variant="forContent" />
            <LatestAnnouncementsSection />
            <DecorativeLine variant="forContent" />
            <GalleryGardenSection />
        </>
    );
}
