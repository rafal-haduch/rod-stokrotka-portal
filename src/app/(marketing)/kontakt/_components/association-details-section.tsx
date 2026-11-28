import { ADDRESS, CONTACT_LINKS, EMAIL, PHONE } from '@/data/contact';
import { associationRegistrationNumbers } from '@/data/association';

import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';
import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';

//TODO: Refactor

export default function AssociationDetailsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.first} aria-labelledby="association-details-title">
            <h1 id="association-details-title">Dane Kontaktowe</h1>
            <DecorativeLine variant="forHeading" />
            <AnimateOnView className="h2-animate">
                <h2>Dane Stowarzyszenia Ogrodowego ,,Stokrotka" w Sanoku</h2>
            </AnimateOnView>
            {/* REVIEW: how grid template area work? */}
            <div className="grid grid-cols-1 justify-items-center gap-4 text-center md:mx-auto md:w-3/5 md:grid-cols-2 md:[grid-template-areas:'name_name''left_right''email_email']">
                {/* Name (full width) */}
                <dl className="text-center md:[grid-area:name]">
                    <dt>Nazwa pełna: </dt>
                    <dd className="mb-4">
                        <strong>STOWARZYSZENIE OGRODOWE ,,STOKROTKA"</strong>
                    </dd>
                    <dt>Forma prawna: </dt>
                    <dd>
                        <strong>STOWARZYSZENIE</strong>
                    </dd>
                </dl>
                {/* Legal data (left col) */}
                <div className="max-w-sm space-y-4 text-center md:[grid-area:left]">
                    <p className="mb-0">Dane rejestrowe:</p>
                    <dl>
                        {associationRegistrationNumbers.map((item) => (
                            <div key={item.label} className="flex gap-1">
                                <dt>{item.label}:</dt>
                                <dd>
                                    <strong>{item.value}</strong>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                {/* Address (right col) */}
                <address className="max-w-sm space-y-4 text-center md:[grid-area:right]">
                    <dl>
                        <dt>Adres siedziby:</dt>
                        <dd>
                            <strong>
                                {ADDRESS.street} <br />
                                {ADDRESS.postalCode}, {ADDRESS.town} <br />
                                Polska
                            </strong>
                        </dd>
                    </dl>
                </address>
                {/* E-mail and Phone Number (full width) */}
                <address className="text-center md:[grid-area:email]">
                    <dl>
                        <dt>Numer telefonu:</dt>
                        <dd className="mb-4">
                            <span className="font-bold">{PHONE.number}</span>
                        </dd>
                        <dt>Adres e-mail:</dt>
                        <dd>
                            <a href={CONTACT_LINKS.MAIL} className="font-bold">
                                {EMAIL}
                            </a>
                        </dd>
                    </dl>
                </address>
            </div>
        </PageSection>
    );
}
