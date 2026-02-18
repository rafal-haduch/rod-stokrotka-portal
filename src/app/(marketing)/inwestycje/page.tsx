import { ROUTES } from '@/config/routes';

import { buildMetadata } from '@/lib/metadata';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import InvestmentsList from './_components/investments-list';

export const metadata = buildMetadata(ROUTES.INVESTMENTS);

export default function InvestmentsPage() {
    return (
        <>
            <h1>Inwestycje</h1>
            <MainHeadingLineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Prace i modernizacje wykonane w naszym ogrodzie</h2>
                </AnimateOnView>

                <InvestmentsList />
            </section>

            <ImageSeparator />
        </>
    );
}
