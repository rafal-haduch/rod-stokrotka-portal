import LineSeparator from '@/components/LineSeparator';
import '../styles/globals.css';
import ImageSeparator from '@/components/ImageSeparator';
import { lato, bonheurRoyale, aboreto, libreBodoni } from '../fonts/fonts';
import { metadata } from './metadata';
import Link from 'next/link';

export { metadata };

export default function GlobalNotFound() {
    return (
        <html
            lang="pl"
            className={`${lato.variable} ${bonheurRoyale.variable} ${aboreto.variable} ${libreBodoni.variable}`}
        >
            <body className=" bg-blue-300 text-gray-900">
                <main className="bg-gray-100 max-w-7xl mx-auto min-h-screen px-4 py-8 space-y-16">
                    <article className="prose mx-auto px-20">
                        <h1>404 Not Found</h1>
                        <LineSeparator />
                        <h2 className="pb-6">
                            Nie znaleziono szukanej treści.
                        </h2>
                        <section className="text-center">
                            <p>
                                Upsss... coś poszło nie tak. Wygląda na to, że
                                treść której szukasz nie istnieje.
                                <br />{' '}
                                <Link href="/">Powróć na stronę główną.</Link>
                            </p>
                        </section>
                        <ImageSeparator />
                    </article>
                </main>
            </body>
        </html>
    );
}
