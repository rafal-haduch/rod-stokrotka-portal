import { associationEmail } from '@/content/data/association';
import Link from 'next/link';

export default function GardenPhotosArticle() {
    return (
        <article>
            <h3 className="text-center">Prośba o przesyłanie zdjęć z naszego ogrodu</h3>
            <p>
                Zwracamy się z prośbą do naszych Działkowców, którzy chcą aby zdjęcia ogrodu
                znalazły się na stronie, o przesłanie ich do Administratora. Zostaną one
                zamieszczone na stronie{' '}
                <Link href="/gallery/community-garden-photos" className="link-context">
                    Galeria
                </Link>
                . Przesyłać zdjęcia można w dowolnej chwili. Najlepiej poprzez naszą wspólną grupę
                na WhatsApp lub na adres e-mail Stowarzyszenia:{' '}
                <span className="font-bold">{associationEmail}</span>
            </p>
        </article>
    );
}
