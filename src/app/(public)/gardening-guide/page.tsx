import { recommendedSites } from '@/data/recommendedSites';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import AnimateOnView from '@/components/AnimatedH2';

export default function GardeningGuidePage() {
    return (
        <article>
            <header>
                <h1>Porady Ogrodowe</h1>
                <MainHeaderLineSeparator />
            </header>

            <section className="text-center">
                <AnimateOnView className="h2-animate">
                    <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
                </AnimateOnView>
                <h3>Polecane strony:</h3>
                <ul className="space-y-6 sm:space-y-4">
                    {recommendedSites.map((item) => (
                        <li key={item.name}>
                            <p>
                                {item.name}:{' '}
                                <a
                                    href={item.url}
                                    className="link-visible inline-block whitespace-nowrap"
                                    target="blank"
                                >
                                    {item.linkContext}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <LineSeparator my="my-10" />

            <section className="text-center">
                <h3>Wybrane artykuły:</h3>
                <WorkInProgress />
            </section>

            <ImageSeparator />
        </article>
    );
}
