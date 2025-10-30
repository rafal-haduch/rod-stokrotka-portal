import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';
import { investmentsData } from '@/data/investmentsData';
import { SlugPagesProps } from '@/types/SlugePagesProps';

export default async function InvestmentPage({ params }: SlugPagesProps) {
    // params jako slug musi byc w async
    const { id } = await params;
    const investment = investmentsData[id];

    if (!investment) {
        return (
            <article>
                <h1>Inwestycja W Ogrodzie</h1>
                <MainHeaderLineSeparator />
                <section>
                    <h2>404 Not Found</h2>
                    <p className="text-center">Nie znaleziono inwestycji której szukasz.</p>
                </section>
            </article>
        );
    }

    return (
        <article>
            <h1>Inwestycja W Ogrodzie</h1>
            <MainHeaderLineSeparator />
            <section>
                <h2>{investment.title}</h2>
                <h3 className="text-center">{investment.date}</h3>
                <p className="text-left sm:text-center">{investment.text}</p>
                <PhotoGallery photos={investment.photos} />
            </section>
            <ImageSeparator />
        </article>
    );
}
