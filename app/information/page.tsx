import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function InformationPage() {
    return (
        <article>
            <h1>Informacje</h1>
            <LineSeparator />
            <h2>Najważniejsze informacje organizacyjne</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
