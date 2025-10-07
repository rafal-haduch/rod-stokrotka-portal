import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function InformationPage() {
    return (
        <article>
            <h1>Informacje</h1>
            <LineSeparator />
            <h2>Najważniejsze informacje organizacyjne</h2>
            <section>
                <p>Harmonogram wywozu odpadów komunalnych na rok 2025:</p>
                <ul>
                    <li>
                        <p>01 maj, godzina: 14:30</p>
                    </li>
                    <li>
                        <p>01 czerwiec, godzina: 14:30</p>
                    </li>
                    <li>
                        <p>01 sierpień, godzina: 14:30</p>
                    </li>
                </ul>
            </section>
            <ImageSeparator />
            <section>
                <p>Harmonogram dyżurów Skarbnika (działka 25) i Sekretarza (działka 24):</p>
                <ul>
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
            <ImageSeparator />
            <section>
                <p>Nasza grupa na komunikatorze WhatsApp</p>
                <p>
                    Serdecznie zachęcamy, do dołączenia do naszej grupy społecznościowej, stworzonej
                    na potrzeby lepszej komunikacji i integracji naszych członków. Aby dołączyć do
                    niej konieczne jest posiadanie aplikacji WhatsApp. W przypadku chęci dołączenia
                    kliknij w poniższy link: lub napisz wiadomość na nasz adres mailowy bądź
                    skontaktuj się bezpośrednio z Prezesem Stowarzyszenia.
                </p>
            </section>
            <ImageSeparator />
            <section>
                <p>Wjazd na teren ogrodu</p>
                <p>
                    Aktualnie po zebraniu walnym 2025 wjazd na teren ogrodu został przywrócony.
                    Uprzejmie prosimy jednak o ograniczenie prędkości przy poruszaniu się po
                    utwardzonej drodze, a także unikania wjazdu w okresach intensywnych opadów. Aby
                    rozłożyć ruch, zalecamy wjazd na górne działki od tamtej strony (obwodnica).
                    Szanujmy nasze wspólne dobro. W przeciwnym razie, wjazd na teren ogrodu może
                    zostać ponownie ograniczony! W przypadku 
                </p>
            </section>
            <ImageSeparator />
            <section>
                <p className="consultation text-center">
                    Najczęściej zadawane pytania przez Działkowiczów?
                </p>
            </section>
        </article>
    );
}
