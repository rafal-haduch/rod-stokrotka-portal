import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import '../styles/globals.css';
import { lato, bonheurRoyale, aboreto, libreBodoni } from '../fonts/fonts';
import Link from 'next/link';

export default function GlobalNotFound() {
    return (
        <html
            lang="pl"
            className={`${lato.variable} ${bonheurRoyale.variable} ${aboreto.variable} ${libreBodoni.variable}`}
        >
            <body>
                <main className="flex items-center">
                    <article>
                        <h1>404 Not Found</h1>
                        <MainHeaderLineSeparator />
                        <h2>Nie znaleziono szukanej treści</h2>
                        <section className="max-w-xl text-center">
                            <p>
                                Upsss... coś poszło nie tak. Wygląda na to, że treść której szukasz
                                nie istnieje.{' '}
                                <Link
                                    href="/"
                                    className="text-blue-500 underline hover:text-blue-800"
                                >
                                    Kliknij tutaj
                                </Link>{' '}
                                aby powrócić na stronę główną.
                            </p>
                        </section>
                    </article>
                </main>
            </body>
        </html>
    );
}
