import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';

export default function ManagementPage() {
    return (
        <article>
            <h1>Zarząd</h1>
            <LineSeparator />
            <h2>Obecny skład zarządu ROD ,,Stokrotka''</h2>
            <section className="text-center mb-10">
                <p>
                    1. Imię Nazwisko - prezes <br />
                    2. Imię Nazwisko - wiceprezes <br />
                    3. Imię Nazwisko - sekretarz <br />
                    4. Imię Nazwisko - skarbnik
                </p>
            </section>
            <h2>Komisja Rewizyjna</h2>
            <section className="text-center mb-20">
                <p>
                    1. Imię Nazwisko - <br />
                    2. Imię Nazwisko - <br />
                    3. Imię Nazwisko - <br />
                </p>
            </section>
            <aside className="text-center">
                <p>Stan na dzień: 17.05.2025</p>
            </aside>
            <ImageSeparator />
        </article>
    );
}
