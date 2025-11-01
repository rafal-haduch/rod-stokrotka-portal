'use client';

import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

import InvestmentsList from './components/InvestmentsList';

export default function InvestmentsPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Inwestycje</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Prace i modernizacje wykonane w naszym ogrodzie
                </h2>
                <InvestmentsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
