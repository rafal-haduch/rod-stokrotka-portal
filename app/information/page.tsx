import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import InformationsList from './components/InformationsList';

export default function InformationPage() {
    return (
        <article>
            <header>
                <h1>Informacje</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2>Najważniejsze informacje organizacyjne</h2>
                <InformationsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
