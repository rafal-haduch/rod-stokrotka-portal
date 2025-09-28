import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function AnnouncementsPage() {
    return (
        <article>
            <h1>Ogłoszenia</h1>
            <LineSeparator />
            <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" Sanok</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
