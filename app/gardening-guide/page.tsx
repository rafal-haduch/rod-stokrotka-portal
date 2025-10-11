import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function GardeningGuidePage() {
    return (
        <article>
            <h1>Porady Ogrodowe</h1>
            <LineSeparator />
            <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
            <section className="text-center">
                <h3>Polecane strony</h3>
                <ul className="space-y-4">
                    <li>
                        <span>Strona 1 </span>
                        <a href="https://www.google.com">www.google.com</a>
                    </li>
                    <li>
                        <span>Strona 2 </span>
                        <a href="https://www.google.com">www.google.com</a>
                    </li>
                    <li>
                        <span>Strona 3 </span>
                        <a href="https://www.google.com">www.google.com</a>
                    </li>
                    <li>
                        <span>Strona 4 </span>
                        <a href="https://www.google.com">www.google.com</a>
                    </li>
                </ul>
            </section>
            <SectionLineSeparator my="my-10" />
            <section className="text-center">
                <h3>Wybrane artykuły</h3>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
