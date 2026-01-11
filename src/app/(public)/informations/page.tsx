import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import AnimateOnView from '@/components/animated-h2';

import InformationsList from './_components/informations-list';

export default function InformationsPage() {
    return (
        <article>
            <header>
                <h1>Informacje</h1>
                <MainHeaderLineSeparator />
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
