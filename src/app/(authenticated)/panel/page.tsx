import { SEO } from '@/config/seo';
import { getUserRoleLabel } from '@/features/user/domain/user-helpers';

import { getUserSession } from '@/shared/lib/next-auth/get-user-session';

export const metadata = SEO.PANEL;

export default async function CMSPage() {
    const user = await getUserSession();

    return (
        <section>
            <h1 className="h2">Panel zarządzania</h1>

            <section className="panel surface-elevated-subtle mx-auto max-w-3xl space-y-4 rounded-lg sm:p-4">
                <h2 className="h3">Informacja dla członków zarządu</h2>
                <p>
                    Jesteś zalogowany jako <strong>{user.name}</strong> z rolą{' '}
                    <strong>{getUserRoleLabel(user.UserUserRole)}</strong>. W tym miejscu są
                    dostępne zakładki przekierowywujące do poszczególnych paneli, które umożliwiają
                    zarządzanie treściami na stronie oraz danymi Stowarzyszenia Ogrodowego
                    ,,Stokrotka" w Sanoku w celu lepszego skoordynowania prowadzenia ewidencji.
                </p>
                <p>
                    W panelach zarządzania zostały umieszczone opisy pomagające korzystać z nich. Po
                    najechaniu myszką (lub przytrzymaniu palcem na urządzeniach mobilnych) na ikonę
                    "i" <strong>pojawi się dodatkowa informacja/wskazówka</strong>.
                </p>
                <p>
                    <strong>Wszelkie kluczowe akcje są monitorowane</strong> pod kątem historii
                    dodawania, edytowania i usuwania aby zachować jak największą kontrolę nad
                    spójnością i integralnością oraz zabezpieczeniem przed niekontrolowanym
                    utraceniem danych.
                </p>
                <p>
                    Prosimy jednak o zachowanie ostrożności podczas wykonywania operacji.{' '}
                    <strong>Niektóre akcje może cofnąć jedynie administrator strony</strong> po ich
                    weryfikacji.
                </p>
                <p>
                    Ze względu na specyfikę panelu zarządzania,{' '}
                    <strong>
                        zaleca się aby korzystać z niego na komputerze/laptopie lub tablecie
                    </strong>{' '}
                    o większym ekranie niż smartfon. Nie wynika to z ograniczeń technicznych a
                    jedynie z ograniczeń praktycznych i wizualnych. W przypadku konieczności
                    skorzystania z panelu zarządzania na smartfonie nie spowoduje to problemów, ale
                    prosimy zachować wtedy <strong>szczególną ostrożność</strong>.
                </p>
                <p>
                    W przypadku jakichkolwiek wątpliwości, pytań lub napotkanych problemów
                    technicznych proszę skontaktować się z administratorem strony:{' '}
                    <strong>501 683 048</strong>
                </p>
            </section>
        </section>
    );
}
