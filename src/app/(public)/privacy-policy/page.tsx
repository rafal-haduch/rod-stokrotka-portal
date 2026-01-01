import { associationEmail } from '@/content/data/association';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

export default function PrivacyPolicyPage() {
    return (
        <article>
            <header>
                <h1>Polityka Prywatności</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2>Zasady przetwarzania danych na stronie</h2>
                <ul className="space-y-10">
                    <li>
                        <h3>1. Administrator danych</h3>
                        <p>
                            Administratorem danych osobowych jest Stowarzyszenie Ogrodowe
                            „Stokrotka” w Sanoku, z siedzibą w Sanoku. <br />
                            Kontakt: {associationEmail}
                        </p>
                    </li>
                    <li>
                        <h3>2. Zakres przetwarzanych danych</h3>
                        <p>
                            Przetwarzamy dane osobowe przekazane przez formularz kontaktowy na
                            stronie, w szczególności: imię, nazwisko, adres e-mail, treść
                            wiadomości.
                        </p>
                    </li>
                    <li>
                        <h3>3. Cel i podstawa przetwarzania danych</h3>
                        <p>
                            Dane osobowe są przetwarzane w celu udzielenia odpowiedzi na przesłaną
                            wiadomość – na podstawie art. 6 ust. 1 lit. a RODO (zgoda osoby, której
                            dane dotyczą).
                        </p>
                    </li>
                    <li>
                        <h3>4. Czas przechowywania danych</h3>
                        <p>
                            Dane przechowywane są tylko przez czas potrzebny do udzielenia
                            odpowiedzi i prowadzenia ewentualnej dalszej korespondencji, a następnie
                            są usuwane.
                        </p>
                    </li>
                    <li>
                        <h3>5. Odbiorcy danych</h3>
                        <p>
                            Dane nie są przekazywane żadnym podmiotom zewnętrznym, z wyjątkiem
                            sytuacji wymaganych przepisami prawa.
                        </p>
                    </li>
                    <li>
                        <h3>6. Prawa osoby, której dane dotyczą</h3>
                        <p>
                            Użytkownik ma prawo do: dostępu do swoich danych, sprostowania,
                            usunięcia lub ograniczenia przetwarzania, cofnięcia zgody w dowolnym
                            momencie.
                        </p>
                    </li>
                    <li>
                        <h3>7. Dobrowolność podania danych</h3>
                        <p>
                            Podanie danych w formularzu kontaktowym jest dobrowolne, ale niezbędne
                            do przesłania wiadomości, otrzymania odpowiedzi i dalszej konwersacji.
                        </p>
                    </li>
                    <li>
                        <h3>8. Pliki cookies i analityka </h3>
                        <p>
                            Strona korzysta z Vercel Analytics, które nie wykorzystuje plików
                            cookies, nie śledzi użytkowników i nie gromadzi danych osobowych. Nie
                            stosujemy żadnych narzędzi marketingowych ani profilujących.
                        </p>
                    </li>
                    <li>
                        <h3>9. Bezpieczeństwo danych </h3>
                        <p>
                            Dane są przesyłane z wykorzystaniem bezpiecznego połączenia HTTPS i
                            przetwarzane zgodnie z zasadami RODO.
                        </p>
                    </li>
                </ul>
            </section>

            <ImageSeparator />
        </article>
    );
}
