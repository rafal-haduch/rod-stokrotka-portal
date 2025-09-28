import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function ContactPage() {
    return (
        <article>
            <h1>Kontakt</h1>
            <LineSeparator />
            <h2>
                Dane kontaktowe Stowarzyszenia Ogrodowego <br />
                ,,Stokrotka" Sanok
            </h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
