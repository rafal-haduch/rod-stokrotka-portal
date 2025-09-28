import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import ListOfDocuments from './components/ListOfDocuments';

export default function DocumentsPage() {
    return (
        <article>
            <h1>Dokumenty</h1>
            <LineSeparator />
            <h2>Oficjalne dokumenty ROD ,,Stokrotka" Sanok</h2>
            <section className="flex justify-center">
                <ListOfDocuments />
            </section>
            <ImageSeparator />
        </article>
    );
}
