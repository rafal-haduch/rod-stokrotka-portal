import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import AnimateOnView from '@/components/AnimatedH2';

export default function AnnouncementsPage() {
    return (
        <article>
            <header>
                <h1>Ogłoszenia</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ogłoszenia Zarządu ROD ,,Stokrotka" w Sanoku</h2>
                </AnimateOnView>
                <WorkInProgress />
            </section>

            <ImageSeparator />
        </article>
    );
}
