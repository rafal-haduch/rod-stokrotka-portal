import {
    associationData,
    associationEmail,
    associationPhoneNumber,
} from '@/content/data/association';

import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import LineSeparator from '@/components/line-separator';
import AnimateOnView from '@/components/animated-h2';

import ContactForm from './_components/contact-form';
import { buildMetadata } from '@/lib/metadata';
import { ROUTES } from '@/constants/routes';

export const metadata = buildMetadata(ROUTES.CONTACT);

export default function ContactPage() {
    return (
        <article>
            <header>
                <h1>Dane Kontaktowe</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Dane Stowarzyszenia Ogrodowego ,,Stokrotka" w Sanoku</h2>
                </AnimateOnView>
                {/*FIXME: */}
                <div className="grid grid-cols-1 justify-items-center gap-8 text-center md:mx-auto md:w-3/5 md:grid-cols-2 md:[grid-template-areas:'name_name''left_right''email_email']">
                    {/* Name (full width) */}
                    <div className="text-center md:[grid-area:name]">
                        <p>
                            Nazwa pełna: <br />
                            <span className="font-bold">STOWARZYSZENIE OGRODOWE ,,STOKROTKA"</span>
                        </p>
                    </div>
                    {/* Legal Form and Data (left col) */}
                    <div className="max-w-sm space-y-4 text-center md:[grid-area:left]">
                        <p>
                            Forma prawna: <br />
                            <span className="font-bold">STOWARZYSZENIE</span>
                        </p>
                        <p className="mb-0">Dane rejestrowe:</p>
                        <ul>
                            {associationData.map((item) => (
                                <li key={item.label}>
                                    <p>
                                        {item.label}: <span className="font-bold">{item.data}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Address and Phone Number (right col) */}
                    <div className="max-w-sm space-y-4 text-center md:[grid-area:right]">
                        <p>
                            Adres siedziby: <br />
                            <span className="font-bold uppercase">
                                ul. Wolna 12/8
                                <br />
                                38-500 Sanok <br />
                                Polska
                            </span>
                        </p>
                        <p>
                            Numer telefonu: <br />
                            <span className="font-bold">{associationPhoneNumber}</span>
                        </p>
                    </div>
                    {/* E-mail (full width) */}
                    <div className='className="mb-6 text-center md:[grid-area:email]'>
                        <p>
                            Adres e-mail: <br />
                            <span className="font-bold">{associationEmail}</span>
                        </p>
                    </div>
                </div>
            </section>

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
