import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function CompletedProjectsPage() {
    return (
        <article>
            <h1>Inwestycje</h1>
            <LineSeparator />
            <h2>Prace i modernizacje wykonane w naszym ogrodzie</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
