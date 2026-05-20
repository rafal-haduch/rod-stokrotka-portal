import Link from 'next/link';

import { paymentStatusAsOf } from '@/data/plotFeesStatus';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';
import AnimateOnView from '@/components/AnimatedH2';

import FeesTypesTable from './components/FeesTypesTable';
import FeeStatusTable from './components/FeeStatusTable';
import NoArrears from './components/NoArrears';
import FeesTable from '@/app/fees/components/FeesTable';

export default function PaymentsPage() {
    return (
        <article>
            <header>
                <h1>Opłaty</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Informacje o płatnościach za użytkowanie ogrodu</h2>
                </AnimateOnView>
                <p className="mb-6 text-left sm:text-center">
                    Termin uiszczenia opłat upływa 30 czerwca każdego roku. Uprzejmie prosimy o
                    przestrzeganie go.
                    <br />
                    <span className="font-bold text-red-500">
                        Notoryczne opóźnienia mogą skutkować naliczaniem odsetek zgodnie z
                        regulaminem ogrodu!
                    </span>
                </p>
                <p className="mb-8 text-left sm:text-center">
                    Zachęcamy do dokonywania wpłat przelewem bankowym – to najszybszy i
                    najwygodniejszy sposób rozliczenia należności.
                    <br />W przypadku płatności gotówką, dyżury Skarbnika znajdą Państwo na stronie{' '}
                    <Link href="/information" className="link-context">
                        Informacje
                    </Link>
                    .
                </p>
                <p className="mb-8 text-left sm:text-center">
                    Numer konta bankowego Stowarzyszenia Ogrodowego ,,Stokrotka'' Sanok (Santander
                    Bank Polska):
                    <br />
                    <br />
                    <span className="text-lg font-bold sm:text-2xl">
                        78 1090 2750 0000 0001 5383 4747
                    </span>
                    <br />
                    <br />
                    Wzór tytułu przelewu: <br />
                    <span className="font-bold italic">
                        "Numer działki, czego dotyczy przelew - rok."
                    </span>
                    <br />
                    <br />
                    Przykładowy tytuł przelewu:
                    <br />
                    <span className="font-bold italic">
                        "Działka 123, opłata za użytkowanie działki - 2025r."
                        <br />
                    </span>
                </p>
                <FeesTypesTable />
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Tabela opłat na 2026 rok</h2>
                </AnimateOnView>
                <FeesTable />
            </section>

            <LineSeparator />

            <ImageSeparator />
        </article>
    );
}
