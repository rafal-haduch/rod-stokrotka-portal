import { SEO } from '@/config/seo';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import FeesInfoSection from './_components/fees-info-section';
import FeeTable from '@/app/(garden-info)/oplaty/_components/FeeTable';
import FeesTypesTable from '@/app/(garden-info)/oplaty/_components/fees-types-table';

export const metadata = SEO.FEES;

export default function FeesPage() {
    return (
        <article>
            <h1>Opłaty</h1>
            <MainHeadingLineSeparator />

            <FeesInfoSection />

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Rodzaje opłat</h2>
                </AnimateOnView>
                <FeesTypesTable />
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Opłaty działek za 2026 rok</h2>
                    <p className="text-center sm:hidden">
                        Przesuń palcem w bok aby zobaczyć całą tabelkę.
                    </p>
                </AnimateOnView>
                <FeeTable />
            </section>

            <LineSeparator />

            {/* <section>
                <AnimateOnView className="h2-animate">
                    <h2>Zaległości wpłat za 2024 rok</h2>
                </AnimateOnView>
                <NoArrears />
            </section> */}
        </article>
    );
}
