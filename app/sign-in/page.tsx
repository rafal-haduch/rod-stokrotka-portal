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
                <p>
                    Logowanie jest dostępne tylko dla członków Stowarzyszenia Ogrodowego
                    ,,Stokrotka'' Sanok. Konta są tworzone przez administratora strony. Login i
                    hasło do pierwszego logowania jest możliwe do uzyskania bezpośrednio przez
                    prezesa stowarzyszenia. Po pierwszym zalogowaniu pokażą się instrukcje dalszego
                    postępowania (np. ustawienie własnego hasła). W przypadku utraty dostępu do
                    konta bądź jakichkolwiek problemów, należy skontaktować się z prezesem lub
                    administratorem strony.
                </p>
            </section>
            <ImageSeparator />
        </article>
    );
}
