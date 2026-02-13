import { LineSeparator } from '@/components/line-separator';

import WasteScheduleSection from './sections/waste-schedule-section';
import TreasurersDutiesSection from './sections/treasurers-duties-section';
import WhatsAppSection from './sections/whats-app-section';
import ContactSection from './sections/contact-section';
import GeneralMeetingSection from './sections/general-meeting-section';
import GardenEntranceSection from './sections/garden-entrance-section';
import GardenPhotosSection from './sections/garden-photos-section';

export default function InformationsList() {
    const my = 'my-10';

    //REVIEW: Should use that section tag?
    return (
        <div className="mx-auto max-w-3xl">
            <WasteScheduleSection />
            <LineSeparator my={my} />

            <TreasurersDutiesSection />
            <LineSeparator my={my} />

            <WhatsAppSection />
            <LineSeparator my={my} />

            <ContactSection />
            <LineSeparator my={my} />

            <GeneralMeetingSection />
            <LineSeparator my={my} />

            <GardenEntranceSection />
            <LineSeparator my={my} />

            <GardenPhotosSection />
        </div>
    );
}
