import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function AboutGardenPage() {
    return (
        <article>
            <h1>O Nas</h1>
            <LineSeparator />
            <h2>Kilka słów o naszym ogrodzie</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
