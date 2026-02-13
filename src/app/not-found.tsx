import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';

export default function NotFound() {
    return (
        <article>
            <header>
                <h1>404 Not Found</h1>
                <MainHeadingLineSeparator />
            </header>
            <section>
                <h2>Upss... Coś poszło nie tak</h2>
                <p className="text-center">Wygląda na to, że treść, której szukasz nie istnieje.</p>
            </section>
            <ImageSeparator />
        </article>
    );
}
