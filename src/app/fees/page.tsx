'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils/cn';
import { useInView } from '@/lib/hooks/useInView';

import { paymentStatusAsOf } from '@/data/plotFeesStatus';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import FeesTypesTable from './components/FeesTypesTable';
import FeesTable from './components/FeesTabel';
import NoArrears from './components/NoArrears';

export default function PaymentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref3, inView: visible3 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Opłaty</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Informacje o płatnościach za użytkowanie ogrodu
                </h2>
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
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Bilans wpłat za 2025 rok
                </h2>
                <p className="mb-6 text-left sm:text-center">
                    Tabelka z bilansem wpłat za dany rok pojawi się na stronie po upływie terminu
                    uiszczenia opłat i będzie widoczna do końca roku kalendarzowego.
                </p>
                <h3 className="text-center">Stan na: {paymentStatusAsOf}</h3>
                <FeesTable />
            </section>

            <LineSeparator />

            <section>
                <h2 ref={ref3} className={cn('h2-animate', visible3 ? 'visible' : '')}>
                    Zaległości wpłat za 2024 rok
                </h2>
                <NoArrears />
            </section>

            <ImageSeparator />
        </article>
    );
}
