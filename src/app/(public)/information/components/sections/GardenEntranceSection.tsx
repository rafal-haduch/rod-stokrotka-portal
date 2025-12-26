import Link from 'next/link';

export default function GardenEntranceSection() {
    return (
        <section>
            <h3 className="text-center">Wjazd na teren ogrodu</h3>
            <p>
                Aktualnie po walnym zebraniu 2025 wjazd na teren ogrodu został przywrócony. Prosimy
                jednak o ograniczenie prędkości (max 15 km/h) oraz unikanie wjazdu w okresach
                intensywnych opadów. Zalecamy wjazd na górne działki od strony obwodnicy, aby
                rozłożyć ruch. Szanujmy nasze wspólne dobro - w przeciwnym razie, wjazd na teren
                ogrodu może zostać ponownie ograniczony. W takim przypadku, lub przy innych
                utrudnieniach wymagających zamknięcia bramy wjazdowej, pojawi się odpowiedni wpis na
                stronie{' '}
                <Link href="/announcements" className="link-context">
                    Ogłoszenia
                </Link>{' '}
                oraz informacja na grupie WhatsApp.
            </p>
        </section>
    );
}
