import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function MemoriesPage() {
    return (
        <article>
            <h1>Wspomnienia</h1>
            <LineSeparator />
            <h2>Galeria wspomnień z ROD ,,Stokrotka'' Sanok</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
