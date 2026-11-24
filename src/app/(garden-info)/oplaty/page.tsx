import { SEO } from '@/config/seo';

import { DecorativeLine } from '@/components/decorative-line';
import { AnimateOnView } from '@/components/animated-h2';

import FeesInfoSection from './_components/fees-info-section';
import FeeTable from '@/app/(garden-info)/oplaty/_components/FeeTable';
import FeesTypesTable from '@/app/(garden-info)/oplaty/_components/fees-types-table';

export const metadata = SEO.FEES;

export default function FeesPage() {
    return (
        <article>
            <h1>Opłaty</h1>
            <DecorativeLine variant="forHeading" />

            <FeesInfoSection />

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Rodzaje opłat</h2>
                </AnimateOnView>
                <FeesTypesTable />
            </section>

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Opłaty działek za 2026 rok</h2>
                    <p className="text-center sm:hidden">
                        Przesuń palcem w bok aby zobaczyć całą tabelkę.
                    </p>
                </AnimateOnView>
                <FeeTable />
            </section>

            <DecorativeLine variant="forContent" />

            {/* <section>
                <AnimateOnView className="h2-animate">
                    <h2>Zaległości wpłat za 2024 rok</h2>
                </AnimateOnView>
                <NoArrears />
            </section> */}
        </article>
    );
}
