import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function AnnouncementsPage() {
    return (
        <article>
            <h1>Ogłoszenia</h1>
            <MainHeaderLineSeparator />
            <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" Sanok</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
