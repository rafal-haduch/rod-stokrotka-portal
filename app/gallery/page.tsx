import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function MemoriesPage() {
    return (
        <article>
            <h1>Galeria</h1>
            <LineSeparator />
            <h2>Zdjęcia z wydarzeń na ROD ,,Stokrotka'' Sanok</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
