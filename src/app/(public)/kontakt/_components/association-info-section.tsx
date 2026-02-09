import {
    associationLegalData,
    associationEmail,
    associationPhoneNumber,
    associationOfficeStreet,
    associationOfficePostalCode,
    associationOfficeCity,
} from '@/content/data/association';

import AnimateOnView from '@/components/animated-h2';

export default function AssociationInfoSection() {
    return (
        <section>
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
                        {associationLegalData.map((item) => (
                            <div key={item.label} className="flex gap-1">
                                <dt>{item.label}:</dt>
                                <dd>
                                    <strong>{item.data}</strong>
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
                                {associationOfficeStreet} <br />
                                {associationOfficePostalCode}, {associationOfficeCity} <br />
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
                            <span className="font-bold">{associationPhoneNumber}</span>
                        </dd>
                        <dt>Adres e-mail:</dt>
                        <dd>
                            <a href={`mailto:${associationEmail}`} className="font-bold">
                                {associationEmail}
                            </a>
                        </dd>
                    </dl>
                </address>
            </div>
        </section>
    );
}
