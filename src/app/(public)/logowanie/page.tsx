import { ROUTES } from '@/constants/routes';

import { buildMetadata } from '@/lib/metadata';

import { LineSeparator } from '@/components/line-separator';
import { AnimateOnView } from '@/components/animated-h2';

import LoginForm from './_components/login-form';

export const metadata = buildMetadata(ROUTES.SIGN_IN);

export default function SignInPage() {
    return (
        <article aria-labelledby="login-heading">
            <h1 id="login-heading" className="sr-only">
                Logowanie do Stowarzyszenia „Stokrotka”
            </h1>

            <section aria-labelledby="login-form-heading">
                <div className="bg-theme-bg-secondary mx-auto mt-4 max-w-md rounded-xl p-8 shadow-xl">
                    <h2
                        id="login-form-heading"
                        className="text-theme-txt font-heading text-center text-6xl font-semibold normal-case"
                    >
                        Zaloguj Się
                    </h2>
                    <div
                        aria-hidden="true"
                        className="border-theme-hr mx-auto mb-6 w-3/4 border-t-4"
                    />
                    <LoginForm />
                </div>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Jak się zalogować?</h2>
                </AnimateOnView>
                <div className="mx-auto max-w-3xl space-y-4">
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
        </article>
    );
}
