import Link from 'next/link';

export default function WhatsAppArticle() {
    return (
        <article>
            <h3 className="text-center">Nasza grupa na WhatsApp</h3>
            <p>
                Zapraszamy do naszej grupy społecznościowej na WhatsApp, ułatwiającej komunikację i
                integrację Działkowców. Dołączenie wymaga aplikacji{' '}
                <a
                    href="https://www.whatsapp.com/?lang=pl"
                    target="_blank"
                    className="link-context"
                >
                    WhatsApp
                </a>
                . W przypadku chęci dołączenia prosimy skontaktować się przez stronę{' '}
                <Link href="/contact" className="link-context">
                    Kontakt
                </Link>{' '}
                lub bezpośrednio z Prezesem Stowarzyszenia Ogrodowego.
            </p>
        </article>
    );
}
