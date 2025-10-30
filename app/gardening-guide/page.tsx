import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { recommendedSites } from '@/data/recommendedSites';

export default function GardeningGuidePage() {
    return (
        <article>
            <h1>Porady Ogrodowe</h1>
            <MainHeaderLineSeparator />
            <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
            <section className="text-center">
                <h3>Polecane strony:</h3>
                <ul className="space-y-6 sm:space-y-4">
                    {recommendedSites.map((item) => (
                        <li key={item.name}>
                            <p>
                                {item.name}:{' '}
                                <a href={item.url} className="link-visible" target="blank">
                                    {item.linkContext}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            <SectionLineSeparator />
            <section className="text-center">
                <h3>Wybrane artykuły:</h3>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
