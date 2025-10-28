// app/gallery/memories/[slug]/page.tsx
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import PhotoGallery from '@/components/PhotoGallery';
import { memoriesData } from '@/data';

type Props = {
    params: { slug: string };
};

// // BUG:
// Error: Route "/gallery/memories/[slug]" used `params.slug`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
//     at MemoryPage (app\gallery\memories\[slug]\page.tsx:12:40)
//   10 |
//   11 | export default async function MemoryPage({ params }: Props) {
// > 12 |     const memory = memoriesData[params.slug]; // Next.js teraz akceptuje params w async
//      |                                        ^
//   13 |
//   14 |     if (!memory) {
//   15 |         return (
export default async function MemoryPage({ params }: Props) {
    const memory = memoriesData[params.slug]; // Next.js teraz akceptuje params w async

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
            <h1>Wspomnienie Z Ogrodu</h1>
            <MainHeaderLineSeparator />
            <section>
                <h2>{memory.title}</h2>
                <h3 className="text-center">{memory.date}</h3>
                <p className="text-left sm:text-center">{memory.text}</p>
                <PhotoGallery photos={memory.photos} />
            </section>
            <ImageSeparator />
        </article>
    );
}
