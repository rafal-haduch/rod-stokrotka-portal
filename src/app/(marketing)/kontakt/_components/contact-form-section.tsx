import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';

import ContactForm from '@/app/(marketing)/kontakt/_components/contact-form';

export default function ContactFormSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="contact-form-title">
            <AnimateOnView className="h2-animate">
                <h2 id="contact-form-title">Formularz kontaktowy</h2>
            </AnimateOnView>
            <ContactForm />
        </PageSection>
    );
}
