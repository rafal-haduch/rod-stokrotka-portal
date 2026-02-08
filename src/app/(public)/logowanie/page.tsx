import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import LineSeparator from '@/components/line-separator';
import ImageSeparator from '@/components/image-separator';
import AnimateOnView from '@/components/animated-h2';

import LoginForm from './_components/login-form';

export const metadata = buildMetadata(ROUTES.SIGN_IN);

export default function SignInPage() {
    return (
        <article className="prose mx-auto">
            <section>
                <LoginForm />
            </section>
            <LineSeparator />
            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Jak się zalogować?</h2>
                </AnimateOnView>
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
