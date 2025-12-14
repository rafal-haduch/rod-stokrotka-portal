import LineSeparator from '@/components/LineSeparator';

import WasteScheduleSection from './sections/WasteScheduleSection';
import TreasurersDutiesSection from './sections/TreasurersDutiesSection';
import WhatsAppSection from './sections/WhatsAppSection';
import ContactSection from './sections/ContactSection';
import GeneralMeetingSection from './sections/GeneralMeetingSection';
import GardenEntranceSection from './sections/GardenEntranceSection';
import GardenPhotosSection from './sections/GardenPhotosSection';

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
