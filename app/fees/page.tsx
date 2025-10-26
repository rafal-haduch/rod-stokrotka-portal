'use client';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';
import Link from 'next/link';
import FeesTable from './components/FeesTabel';
import TableOfFeeTypes from './components/TableOfFeeTypes';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import { paymentStatusAsOf } from '@/data';
import NoArrears from './components/NoArrears';

export default function PaymentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Opłaty</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Informacje o płatnościach za użytkowanie ogrodu
            </h2>
            <section className="space-y-6 text-center">
                <p className="">
                    Termin uiszczenia opłat upływa 30 czerwca każdego roku. Uprzejmie prosimy o jego
                    przestrzeganie. <br />
                    <span className="font-bold text-red-500">
                        Notoryczne opóźnienia mogą skutkować naliczaniem odsetek zgodnie z
                        regulaminem ogrodu!
                    </span>
                </p>
                <p>
                    Zachęcamy do dokonywania wpłat przelewem bankowym – to najszybszy i
                    najwygodniejszy sposób rozliczenia należności.
                </p>
                <p className="">
                    Numer konta bankowego Stowarzyszenia Ogrodowego ,,Stokrotka'' Sanok (Santander
                    Bank Polska):
                </p>
                <p className="mb-12 text-2xl font-extrabold">
                    <span>78 1090 2750 0000 0001 5383 4747 </span>
                </p>
                <p>
                    Wzór tytułu przelewu: <br />
                    <span className="font-bold">Numer działki, czego dotyczy przelew - rok.</span>
                    <br />
                    <br />
                    Przykładowy tytuł przelewu:
                    <br />
                    <span className="font-bold">
                        Działka 123, opłata za użytkowanie działki - 2025r.
                        <br />
                    </span>
                </p>
                <TableOfFeeTypes />
                <p>
                    W przypadku płatności gotówką, dyżury Skarbnika znajdą Państwo na stronie{' '}
                    <Link href="/information" className="link-context">
                        Informacje
                    </Link>
                    .
                </p>
            </section>
            <SectionLineSeparator />
            <section className="mt-8 overflow-x-auto">
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Bilans wpłat na 2025 rok
                </h2>
                <p className="mb-6">
                    Tabelka z bilansem wpłat za dany rok pojawi się na stronie po upływie terminu
                    uiszczenia opłat i będzie widoczna do końca roku kalendarzowego.
                </p>
                <h3 className="text-center">Stan na: {paymentStatusAsOf}</h3>
                <FeesTable />
                <p className="sm:text-center">
                    *w przypadku błędu prosimy skontaktować się ze Skarbnikiem lub Prezesem.
                </p>
            </section>
            <SectionLineSeparator />
            <section>
                <h2>Zaległości wpłat za 2024 rok</h2>
                <NoArrears />
            </section>
            <ImageSeparator />
        </article>
    );
}
