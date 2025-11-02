import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

export default function NotFound() {
    return (
        <article>
            <header>
                <h1>404 Not Found</h1>
                <MainHeaderLineSeparator />
            </header>
            <section>
                <h2>Upss... Coś poszło nie tak</h2>
                <p className="text-center">Wygląda na to, że treść, której szukasz nie istnieje.</p>
            </section>
            <ImageSeparator />
        </article>
    );
}
