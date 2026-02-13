import { buildMetadata } from '@/lib/metadata';

import { ROUTES } from '@/constants/routes';

import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import InformationsList from './_components/informations-list';

export const metadata = buildMetadata(ROUTES.INFORMATIONS);

export default function InformationsPage() {
    return (
        <article>
            <header>
                <h1>Informacje</h1>
                <MainHeadingLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Najważniejsze informacje organizacyjne</h2>
                </AnimateOnView>
                <InformationsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
