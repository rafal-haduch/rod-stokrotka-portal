import { SEO } from '@/config/seo';

import { DecorativeLine } from '@/components/decorative-line';
import { AnimateOnView } from '@/components/animated-h2';

import AssociationInfoSection from './_components/association-info-section';
import ContactForm from './_components/contact-form';

export const metadata = SEO.CONTACT;

export default function ContactPage() {
    return (
        <article>
            <h1>Dane Kontaktowe</h1>
            <DecorativeLine variant="forHeading" />

            <AssociationInfoSection />

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Formularz kontaktowy</h2>
                </AnimateOnView>

                <ContactForm />
            </section>
        </article>
    );
}
