import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import AnimateOnView from '@/components/AnimatedH2';

import InformationsList from './components/InformationsList';

export default function InformationPage() {
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
