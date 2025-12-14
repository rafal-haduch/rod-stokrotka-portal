import Link from 'next/link';

export default function () {
    return (
        <section>
            <h3 className="text-center">Kontakt i pytania</h3>
            <p className="mb-4">
                Jeżeli mają Państwo jakiekolwiek pytania i potrzebują się skontaktować z zarządem
                Stowarzyszenia Ogrodowego Stokrotka Sanok, to najlepszą formą jest napisanie
                wiadomości przez formularz kontaktowy na stronie{' '}
                <Link href="/contact" className="link-context">
                    Kontakt
                </Link>{' '}
                lub w przypadku pilnych spraw bezpośrednio z Prezesem Stowarzyszenia Ogrodowego.
            </p>
        </section>
    );
}
