import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';
import { memoriesData } from '@/data/memoriesData';
import { toTitleCase } from '@/lib/toTitleCase';
import { SlugPagesProps } from '@/types/SlugePagesProps';

export default async function MemoryPage({ params }: SlugPagesProps) {
    // params jako slug musi byc w async
    const { id } = await params;
    const memory = memoriesData[id];

    if (!memory) {
        return (
            <article>
                <h1>Wspomnienie Z Ogrodu</h1>
                <MainHeaderLineSeparator />
                <section>
                    <h2>404 Not Found</h2>
                    <p className="text-center">Nie znaleziono wspomnienia którego szukasz.</p>
                </section>
            </article>
        );
    }

    return (
        <article>
            <h1>{toTitleCase(memory.title)}</h1>
            <MainHeaderLineSeparator />
            <section>
                <h3 className="text-center">{memory.date}</h3>
                <p className="text-left sm:text-center">{memory.text}</p>
                <PhotoGallery photos={memory.photos} />
            </section>
            <ImageSeparator />
        </article>
    );
}
