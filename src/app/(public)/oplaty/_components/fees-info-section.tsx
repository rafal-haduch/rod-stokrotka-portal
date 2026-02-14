import Link from 'next/link';

import { AnimateOnView } from '@/components/animated-h2';

export default function FeesInfoSection() {
    return (
        <section>
            <AnimateOnView className="h2-animate">
                <h2>Informacje o płatnościach za użytkowanie ogrodu</h2>
            </AnimateOnView>
            <p className="mb-6 text-left sm:text-center">
                Termin uiszczenia opłat upływa 30 czerwca każdego roku. Uprzejmie prosimy o
                przestrzeganie go.
                <br />
                <span className="font-bold text-red-500">
                    Notoryczne opóźnienia mogą skutkować naliczaniem odsetek zgodnie z regulaminem
                    ogrodu!
                </span>
            </p>
            <p className="mb-8 text-left sm:text-center">
                Zachęcamy do dokonywania wpłat przelewem bankowym – to najszybszy i najwygodniejszy
                sposób rozliczenia należności.
                <br />W przypadku płatności gotówką, dyżury Skarbnika znajdą Państwo na stronie{' '}
                <Link href="/information" className="link-context">
                    Informacje
                </Link>
                .
            </p>
            <p className="mb-8 flex flex-col gap-4 text-left sm:text-center">
                <span>
                    Numer konta bankowego Stowarzyszenia Ogrodowego ,,Stokrotka'' Sanok (Santander
                    Bank Polska):
                </span>
                <strong className="mb-8 text-lg sm:text-2xl">
                    78 1090 2750 0000 0001 5383 4747
                </strong>
                <span>Wzór tytułu przelewu: </span>
                <strong className="mb-8 italic">
                    "Numer działki, czego dotyczy przelew - rok."
                </strong>
                <span>Przykładowy tytuł przelewu:</span>
                <strong className="italic">
                    "Działka 123, opłata za użytkowanie działki - 2025r."
                    <br />
                </strong>
            </p>
        </section>
    );
}
