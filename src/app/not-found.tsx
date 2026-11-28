import { ImageSeparator } from '@/components/layout/image-separator';
import DecorativeLine from '@/components/layout/decorative-line';

export default function NotFound() {
    return (
        <section>
            <h1>404 Not Found</h1>
            <DecorativeLine variant="forHeading" />
            <h2>Upss... Coś poszło nie tak</h2>
            <p className="text-center">Wygląda na to, że treść, której szukasz nie istnieje.</p>
            <ImageSeparator />
        </section>
    );
}
