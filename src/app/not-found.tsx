import { ImageSeparator } from '@/components/image-separator';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';

export default function NotFound() {
    return (
        <section>
            <h1>404 Not Found</h1>
            <MainHeadingLineSeparator />
            <h2>Upss... Coś poszło nie tak</h2>
            <p className="text-center">Wygląda na to, że treść, której szukasz nie istnieje.</p>
            <ImageSeparator />
        </section>
    );
}
