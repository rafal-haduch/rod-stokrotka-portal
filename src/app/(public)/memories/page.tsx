import AnimateOnView from '@/components/AnimatedH2';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';

import MemoriesList from './components/MemoriesList';

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
