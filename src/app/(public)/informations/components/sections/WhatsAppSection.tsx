import Link from 'next/link';

export default function WhatsAppSection() {
    return (
        <section>
            <h3 className="text-center">Nasza grupa na WhatsApp</h3>
            <p className="mb-4">
                Zapraszamy do naszej grupy społecznościowej na WhatsApp, ułatwiającej komunikację i
                integrację Działkowców. Dołączenie wymaga aplikacji{' '}
                <a href="https://www.whatsapp.com/?lang=pl" target="blank" className="link-context">
                    WhatsApp
                </a>
                . W przypadku chęci dołączenia prosimy skontaktować się przez stronę{' '}
                <Link href="/contact" className="link-context">
                    Kontakt
                </Link>{' '}
                lub bezpośrednio z Prezesem Stowarzyszenia Ogrodowego.
            </p>
        </section>
    );
}
