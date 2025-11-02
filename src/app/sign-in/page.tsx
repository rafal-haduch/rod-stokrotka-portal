'use client';

import SectionLineSeparator from '@/components/SectionLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';

import LoginForm from './components/LoginForm';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

export default function SignInPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article className="prose mx-auto">
            <section>
                <LoginForm />
            </section>
            <SectionLineSeparator />
            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Jak się zalogować?
                </h2>
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
