import { SEO } from '@/config/seo';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';
import { LineSeparator } from '@/components/line-separator';

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
            <MainHeadingLineSeparator />

            <section aria-labelledby="org-info-heading">
                <AnimateOnView className="h2-animate">
                    <h2 id="org-info-heading">Najważniejsze informacje organizacyjne:</h2>
                </AnimateOnView>

                <div className="mx-auto max-w-3xl">
                    <LineSeparator my={my} />

                    <WasteScheduleArticle />

                    <LineSeparator my={my} />

                    <TreasurersDutiesArticle />

                    <LineSeparator my={my} />

                    <WhatsAppArticle />

                    <LineSeparator my={my} />

                    <ContactArticle />

                    <LineSeparator my={my} />

                    <GeneralMeetingArticle />

                    <LineSeparator my={my} />

                    <GardenEntranceArticle />

                    <LineSeparator my={my} />

                    <GardenPhotosArticle />

                    <LineSeparator my={my} />
                </div>
            </section>
        </>
    );
}
