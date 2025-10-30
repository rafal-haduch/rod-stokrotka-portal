import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import { treasurersDuties } from '@/data/treasurersDuties';
import { wasteCollectionSchedule } from '@/data/wasteCollectionSchedule';
import Link from 'next/link';

const myInformationPage = 'my-10';

export default function InformationPage() {
    return (
        <article>
            <h1>Informacje</h1>
            <MainHeaderLineSeparator />
            <h2>Najważniejsze informacje organizacyjne</h2>
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Harmonogram wywozu odpadów komunalnych na 2025 rok</h3>
                <table className="text-md mx-auto w-full max-w-2xl table-fixed border border-lime-400 text-center">
                    <thead>
                        <tr className="bg-lime-200">
                            <th className="w-1/3 border border-lime-400 px-3 py-2">Miesiąc</th>
                            <th className="w-1/3 border border-lime-400 px-3 py-2">Mieszane</th>
                            <th className="w-1/3border border-lime-400 px-1 py-2 sm:px-3">
                                Segregowane
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {wasteCollectionSchedule.map((item, i) => (
                            <tr key={i} className="hover:bg-gray-100">
                                <th className="border border-lime-400 font-medium">{item.month}</th>
                                <th className="border border-lime-400 font-medium">
                                    {item.mixedWasteCollectionDay.join(', ')}
                                </th>
                                <th className="border border-lime-400 font-medium">
                                    {item.sortedWasteCollectionDay.join(', ')}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">
                    Dyżury Skarbnika (działka 25) i Sekretarza (działka 24) na 2025 rok
                </h3>
                <ul className="text-center">
                    {treasurersDuties.map((item, i) => (
                        <li key={i}>
                            <span>{item.date}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Nasza grupa na WhatsApp</h3>
                <p className="mb-4">
                    Zapraszamy do naszej grupy społecznościowej na WhatsApp, ułatwiającej
                    komunikację i integrację Działkowiczów. Dołączenie wymaga aplikacji{' '}
                    <a
                        href="https://www.whatsapp.com/?lang=pl"
                        target="blank"
                        className="link-context"
                    >
                        WhatsApp
                    </a>
                    . W przypadku chęci dołączenia prosimy skontaktować się przez stronę{' '}
                    <Link href="/contact" className="link-context">
                        Kontakt
                    </Link>{' '}
                    lub bezpośrednio z Prezesem Stowarzyszenia.
                </p>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Kontakt i pytania</h3>
                <p className="mb-4">
                    Jeżeli mają Państwo jakiekolwiek pytania i potrzebują się skontaktować z
                    zarządem Stowarzyszenia Ogrodowego Stokrotka Sanok, to najlepszą formą jest
                    napisanie wiadomości przez formularz kontaktowy na stronie{' '}
                    <Link href="/contact" className="link-context">
                        Kontakt
                    </Link>{' '}
                    lub w przypadku pilnych spraw bezpośrednio z Prezesem Stowarzyszenia.
                </p>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Walne zebranie Członków ROD Stokrotka Sanok</h3>
                <p>
                    Corocznie na początku sezonu (koniec kwietnia / początek maja) odbywa się
                    spotkanie wszystkich członków ogrodu Stokrotka w Sanoku. Obecność jest
                    obowiązkowa. Omawiane są zmiany, dyskusje o ogrodzie oraz propozycje
                    Działkowców.
                </p>
            </section>
            <SectionLineSeparator my={myInformationPage} />
            <section className="mx-auto max-w-3xl">
                <h3 className="text-center">Wjazd na teren ogrodu</h3>
                <p>
                    Aktualnie po walnym zebraniu 2025 wjazd na teren ogrodu został przywrócony.
                    Prosimy jednak o ograniczenie prędkości (max 15 km/h) oraz unikanie wjazdu w
                    okresach intensywnych opadów. Zalecamy wjazd na górne działki od strony
                    obwodnicy, aby rozłożyć ruch. Szanujmy nasze wspólne dobro - w przeciwnym razie,
                    wjazd na teren ogrodu może zostać ponownie ograniczony. W takim przypadku, lub
                    przy innych utrudnieniach wymagających zamknięcia bramy wjazdowej, pojawi się
                    odpowiedni wpis na stronie{' '}
                    <Link href="/announcements" className="link-context">
                        Ogłoszenia
                    </Link>{' '}
                    oraz informacja na grupie WhatsApp.
                </p>
            </section>

            <ImageSeparator />
        </article>
    );
}
