import { SEO } from '@/config/seo';

import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';

import ContactArticle from './_components/contact-article';
import WasteScheduleArticle from './_components/waste-schedule-article';
import TreasurersDutiesArticle from './_components/treasurers-duties-article';
import WhatsAppArticle from './_components/whats-app-article';
import GeneralMeetingArticle from './_components/general-meeting-article';
import GardenEntranceArticle from './_components/garden-entrance-article';
import GardenPhotosArticle from './_components/garden-photos-article';

export const metadata = SEO.INFORMATIONS;

export default function InformationsPage() {
    const my = 'my-10 sm:my-20';

    return (
        <>
            <h1>Informacje</h1>
            <DecorativeLine variant="forHeading" />

            <section aria-labelledby="org-info-heading">
                <AnimateOnView className="h2-animate">
                    <h2 id="org-info-heading">Najważniejsze informacje organizacyjne:</h2>
                </AnimateOnView>

                <div className="mx-auto max-w-3xl">
                    <DecorativeLine my={my} />

                    <WasteScheduleArticle />

                    <DecorativeLine my={my} />

                    <TreasurersDutiesArticle />

                    <DecorativeLine my={my} />

                    <WhatsAppArticle />

                    <DecorativeLine my={my} />

                    <ContactArticle />

                    <DecorativeLine my={my} />

                    <GeneralMeetingArticle />

                    <DecorativeLine my={my} />

                    <GardenEntranceArticle />

                    <DecorativeLine my={my} />

                    <GardenPhotosArticle />

                    <DecorativeLine my={my} />
                </div>
            </section>
        </>
    );
}
