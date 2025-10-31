import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LoginForm from './components/LoginForm';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';

export default function SignInPage() {
    return (
        <article className="prose mx-auto">
            <section>
                <LoginForm />
            </section>
            <SectionLineSeparator />
            <section>
                <h2>Jak się zalogować?</h2>
                <div className="space-y-4 text-left sm:text-center">
                    <p>
                        Logowanie jest dostępne wyłącznie dla członków Stowarzyszenia Ogrodowego
                        „Stokrotka” w Sanoku. Konta zakłada administrator strony. Login i hasło do
                        pierwszego logowania można uzyskać bezpośrednio u Prezesa Stowarzyszenia.
                    </p>
                    <p>
                        Po pierwszym zalogowaniu wyświetlą się instrukcje dalszego postępowania, np.
                        zmiana hasła. W razie utraty dostępu lub innych problemów prosimy o kontakt
                        z Prezesem lub administratorem strony.
                    </p>
                </div>
            </section>
            <ImageSeparator />
        </article>
    );
}
