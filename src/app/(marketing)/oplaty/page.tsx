import { buildMetadata } from '@/lib/metadata';

import { ROUTES } from '@/constants/routes';

import { paymentStatusAsOf } from '@/content/data/plot-fees-status';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import FeesInfoSection from './_components/fees-info-section';
import FeesTypesTable from './_components/fees-types-table';
import FeesTable from './_components/fees-tabel';
import NoArrears from './_components/noA-arears';

export const metadata = buildMetadata(ROUTES.FEES);

export default function PaymentsPage() {
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
                    <h2>Bilans opłat za 2025 rok</h2>
                </AnimateOnView>
                <p className="text-center">
                    <strong>(Stan na: {paymentStatusAsOf})</strong>
                </p>
                <FeesTable />
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Zaległości wpłat za 2024 rok</h2>
                </AnimateOnView>
                <NoArrears />
            </section>

            <ImageSeparator />
        </article>
    );
}
