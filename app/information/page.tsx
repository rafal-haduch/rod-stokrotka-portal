import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

const myInformationPage = 'my-10';

export default function InformationPage() {
    return (
        <article>
            <h1>Informacje</h1>
            <LineSeparator />
            <h2>Najważniejsze informacje organizacyjne</h2>
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Harmonogram wywozu odpadów komunalnych na rok 2025:</h3>
                <ul className="text-center">
                    <li>
                        <p>1 maj, godzina: 14:30</p>
                    </li>
                    <li>
                        <p>1 czerwiec, godzina: 14:30</p>
                    </li>
                    <li>
                        <p>1 sierpień, godzina: 14:30</p>
                    </li>
                </ul>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">
                    Dyżury Skarbnika (działka 25) i Sekretarza (działka 24) na 2025 rok:
                </h3>
                <ul className="text-center">
                    <li>
                        <p>10 czerwiec, w godzinach: 16:00-18:00</p>
                    </li>
                    <li>
                        <p>17 czerwiec, w godzinach: 16:00-18:00</p>
                    </li>
                    <li>
                        <p>26 czerwiec, w godzinach: 16:00-18:00</p>
                    </li>
                </ul>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Nasza grupa na komunikatorze WhatsApp</h3>
                <p className="mb-4">
                    Serdecznie zapraszamy, do dołączenia do naszej grupy społecznościowej,
                    stworzonej na potrzeby lepszej komunikacji i integracji naszych członków. Aby
                    dołączyć do niej konieczne jest posiadanie aplikacji WhatsApp. W przypadku chęci
                    dołączenia kliknij w poniższy link, zeskanuj kod QR telefonem, lub napisz
                    wiadomość na nasz adres mailowy bądź skontaktuj się bezpośrednio z Prezesem
                    Stowarzyszenia.
                </p>
                <p className="mb-8 text-center">
                    Dołącz do grupy:
                    <br />
                    <a
                        href="https://www.whatsapp.com/?lang=pl"
                        className="text-green-500 underline hover:text-green-600"
                    >
                        www.whatsapp.com
                    </a>
                </p>
                <img
                    src="/CodeQR.png"
                    width={200}
                    height={200}
                    alt="Kod QR do dołączenia do grupy na WhatsApp"
                    className="mx-auto"
                />
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Walne zebranie Zarządu i Działkowców</h3>
                <p>
                    Co rok na początku sezonu (zazwyczaj koniec kwietnia / początek maja), odbywa
                    się spotkanie wszystkich członków ogrodu Stokrotka w Sanoku. Obecność jest
                    obowiązkowa! Na zebraniu przeprowadzane jest głosowanie w sprawie wprowadzania
                    zmian, dyskusje na tematy związane z ogrodem oraz propozycje wszelkich pomysłów
                    od Działkowców.
                </p>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Wjazd na teren ogrodu</h3>
                <p>
                    Aktualnie po zebraniu walnym 2025 wjazd na teren ogrodu został przywrócony.
                    Uprzejmie prosimy jednak o ograniczenie prędkości przy poruszaniu się po
                    utwardzonej drodze, a także unikania wjazdu w okresach intensywnych opadów. Aby
                    rozłożyć ruch, zalecamy wjazd na górne działki od tamtej strony (obwodnica).
                    Szanujmy nasze wspólne dobro. W przeciwnym razie, wjazd na teren ogrodu może
                    zostać ponownie ograniczony! W takim przypadku, lub przy innych utrudnieniach
                    wymagających zamknięcia bramy wjazdowej, pojawi się odpowiedni wpis na stronie w
                    sekcji "Ogłoszenia" oraz informacja na grupie WhatsApp.
                </p>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section>
                <h3 className="consultation text-center">
                    Najczęściej zadawane pytania przez Działkowiczów?
                </h3>
            </section>
            <ImageSeparator />
        </article>
    );
}
