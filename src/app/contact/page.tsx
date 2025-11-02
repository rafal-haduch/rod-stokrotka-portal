'use client';

import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

import {
    associationData,
    associationEmail,
    associationPhoneNumber,
} from '@/data/associationDetails';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';

import ContactForm from './components/ContactForm';

export default function ContactPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Kontakt</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Dane Stowarzyszenia Ogrodowego ,,Stokrotka" w Sanoku
                </h2>
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

            <SectionLineSeparator />

            <section>
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Formularz kontaktowy
                </h2>
                <ContactForm />
            </section>

            <ImageSeparator />
        </article>
    );
}
