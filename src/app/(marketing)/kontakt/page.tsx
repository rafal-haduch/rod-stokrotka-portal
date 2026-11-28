import { SEO } from '@/config/seo';

import DecorativeLine from '@/components/layout/decorative-line';

import ContactFormSection from '@/app/(marketing)/kontakt/_components/contact-form-section';
import AssociationDetailsSection from '@/app/(marketing)/kontakt/_components/association-details-section';

export const metadata = SEO.CONTACT;

export default function ContactPage() {
    return (
        <>
            <AssociationDetailsSection />
            <DecorativeLine variant="forContent" />
            <ContactFormSection />
        </>
    );
}
