import { ROUTES } from '@/shared/config/routes';

import { buildMetadata } from '@/shared/lib/metadata';

import { AnimateOnView } from '@/components/animated-h2';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';

import MemoriesList from './_components/memories-list';

export const metadata = buildMetadata(ROUTES.MEMORIES);

export default function MemoriesPage() {
    return (
        <>
            <h1>Wspomnienia</h1>
            <MainHeadingLineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Wydarzenia z życia naszego ogrodu</h2>
                </AnimateOnView>

                <MemoriesList />
            </section>
        </>
    );
}
