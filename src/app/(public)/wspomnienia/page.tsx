import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import AnimateOnView from '@/components/animated-h2';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import ImageSeparator from '@/components/image-separator';

import MemoriesList from './_components/memories-list';

export const metadata = buildMetadata(ROUTES.MEMORIES);

export default function MemoriesPage() {
    return (
        <article>
            <header>
                <h1>Wspomnienia</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Wspomnienia z naszego ogrodu</h2>
                </AnimateOnView>
                <MemoriesList />
            </section>

            <ImageSeparator />
        </article>
    );
}
