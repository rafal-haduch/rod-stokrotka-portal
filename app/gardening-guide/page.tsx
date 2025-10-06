import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function GardeningGuidePage() {
    return (
        <article>
            <h1>Porady Ogrodowe</h1>
            <LineSeparator />
            <h2>Porady, wskazówki i inspiracje dla ogrodu</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
