'use client';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import ContactForm from './components/ContactForm';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';
import SectionLineSeparator from '@/components/SectionLineSeparator';

interface Stat {
    label: string;
    value: number;
}

const stats: Stat[] = [
    { label: 'Liczba działek', value: 62 },
    { label: 'Liczba członków', value: 62 },
];
interface associationData {
    label: string;
    data: string;
}

const associationData: associationData[] = [
    { label: 'KRS', data: '0000539144 ' },
    { label: 'NIP', data: '6871959648 ' },
    { label: 'REGON', data: '360573323 ' },
];

export default function ContactPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Kontakt</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Dane Stowarzyszenia Ogrodowego <br />
                ,,Stokrotka" Sanok
            </h2>
            <section className="grid grid-cols-1 justify-items-center gap-8 text-center md:mx-auto md:w-3/5 md:grid-cols-2 md:[grid-template-areas:'name_name''left_right''email_email']">
                {/* NAZWA – pełna szerokość */}
                <div className="text-center md:[grid-area:name]">
                    <p>
                        Nazwa pełna: <br />
                        <span className="font-bold">STOWARZYSZENIE OGRODOWE ,,STOKROTKA"</span>
                    </p>
                </div>

                {/* LEWA KOLUMNA */}
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

                {/* PRAWA KOLUMNA */}
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
                        <span className="font-bold">123 123 123</span>
                    </p>
                </div>
                <div className='className="mb-6 text-center md:[grid-area:email]'>
                    <p>
                        Adres e-mail: <br />
                        <span className="font-bold">rod.stokrotka.sanok@gmail.com</span>
                    </p>
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
