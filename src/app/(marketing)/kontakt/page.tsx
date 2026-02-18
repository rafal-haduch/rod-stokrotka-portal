import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import AssociationInfoSection from './_components/association-info-section';
import ContactForm from './_components/contact-form';

export const metadata = buildMetadata(ROUTES.CONTACT);

export default function ContactPage() {
    return (
        <article>
            <h1>Dane Kontaktowe</h1>
            <MainHeadingLineSeparator />

            <AssociationInfoSection />

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Formularz kontaktowy</h2>
                </AnimateOnView>

                <ContactForm />
            </section>

            <ImageSeparator />
        </article>
    );
}
