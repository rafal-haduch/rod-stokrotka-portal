import { SEO } from '@/config/seo';

import { recommendedSites } from '@/content/recommended-sites';

import { DecorativeLine } from '@/components/decorative-line';
import { WorkInProgress } from '@/components/work-in-progress';
import { AnimateOnView } from '@/components/animated-h2';

export const metadata = SEO.GARDENING_GUIDE;

export default function GardeningGuidePage() {
    return (
        <article>
            <header>
                <h1>Porady Ogrodowe</h1>
                <DecorativeLine variant="forHeading" />
                <AnimateOnView className="h2-animate">
                    <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
                </AnimateOnView>
            </header>

            <section className="text-center">
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

            <DecorativeLine my="my-10" />

            <section className="text-center">
                <h3>Wybrane artykuły:</h3>
                <WorkInProgress />
            </section>
        </article>
    );
}
