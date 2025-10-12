import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function MemoriesPage() {
    return (
        <article>
            <h1>Galeria</h1>
            <MainHeaderLineSeparator />
            <h2>Zdjęcia z wydarzeń naszego ogrodu</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
