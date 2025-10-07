'use client';
import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';
import Link from 'next/link';
import FeesTable from './components/FeesTabel';
import TableOfFeeTypes from './components/TableOfFeeTypes';

export default function PaymentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>Opłaty</h1>
            <LineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Informacje dotyczące płatności za użytkowanie ogrodu
            </h2>
            <section className="mx-auto max-w-5xl space-y-6">
                <p className="">
                    Termin uiszczenia opłat jest do 30.06 każdego roku. Uprzejmie prosimy o
                    pilnowanie tego terminu. <br />
                    <span className="font-bold text-red-500">
                        Notoryczne opóźnienia mogą skutkować naliczaniem odsetek zgodnie z
                        regulaminem ogrodu!
                    </span>
                </p>
                <p>
                    Zachęcamy także wszystkich Działkowców do dokonywania wpłat przelewem bankowym.
                    To najwygodniejszy i najszybszy sposób rozliczenia należności.
                </p>
                <p className="">
                    Numer konta bankowego Stowarzyszenia Ogrodowego ,,Stokrotka'' Sanok (Santander
                    Bank Polska):
                </p>
                <p className="mb-12 text-center text-2xl font-bold">
                    <span>00 1234 5678 9012 3456 7890 0000 </span>
                </p>
                <p className="text-center">
                    Wzór tytułu przelewu: <br />
                    <span className="font-bold">
                        Numer działki, czego dotyczy przelew (możliwe opcje w tabeli poniżej) - rok.
                    </span>
                    <br />
                    <br />
                    Przykładowe tytuły przelewu:
                    <br />
                    <span className="font-bold">
                        Działka 123, opłata za działkę - 2025r.
                        <br />
                        Działka 123, opłata za działkę, nieczystości i energię - 2025r.
                        <br />
                        Działka 123, opłata całościowa - 2025r.
                        <br />
                    </span>
                </p>
                <TableOfFeeTypes />
                <p className="mx-auto max-w-xl text-lg">
                    * całość - dotyczy wyłącznie sumy <span className="font-bold">WSZYSTKICH</span>{' '}
                    opłat - jest to ostatnia kolumna w tabeli z tytułem ,,Kwota do zapłaty''
                </p>
                <p>
                    W przypadku chęci opłacenia składek gotówką, rozpiskę dyżurów Skarbnika znajdą
                    Państwo na stronie z informacjami.{' '}
                    <Link href="/information">Kliknij tutaj aby zobaczyć...</Link>
                </p>
            </section>
            <ImageSeparator />
            <section className="mt-8 overflow-x-auto">
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Bilans wpłat (stan na: 07.10.2025)
                </h2>
                <FeesTable />
            </section>
        </article>
    );
}
