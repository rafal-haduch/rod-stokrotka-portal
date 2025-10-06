import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import ContactForm from './components/ContactForm';

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
    return (
        <article>
            <h1>Kontakt</h1>
            <LineSeparator />
            <h2>
                Dane Stowarzyszenia Ogrodowego <br />
                ,,Stokrotka" Sanok
            </h2>
            <section className="space-y-5 text-center">
                <p>
                    Nazwa pełna: <br />
                    <span className="font-bold">STOWARZYSZENIE OGRODOWE ,,STOKROTKA"</span>
                </p>
                <p>
                    Forma prawna: <br />
                    <span className="font-bold"> STOWARZYSZENIE </span>
                </p>
                <ul>
                    {associationData.map((associationData) => (
                        <li key={associationData.label}>
                            <p>
                                {associationData.label}:{' '}
                                <span className="font-bold">{associationData.data}</span>
                            </p>
                        </li>
                    ))}
                </ul>
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
                    numer telefonu: <br />
                    <span className="font-bold">123 123 123</span>
                </p>
                <p>
                    adres e-mail: <br />
                    <span className="font-bold">rod.stokrotka.sanok@gmail.com</span>
                </p>
            </section>

            <ImageSeparator />

            <section>
                <h2>Formularz kontaktowy</h2>
                <ContactForm />
            </section>

            <ImageSeparator />
        </article>
    );
}
