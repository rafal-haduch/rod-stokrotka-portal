import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/components/layout/page-section';
import AnimateOnView from '@/components/layout/animated-h2';
import DecorativeLine from '@/components/layout/decorative-line';

export default function WelcomeSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.first} aria-labelledby="welcome-title">
            <h1 id="welcome-title">Strona Główna</h1>
            <DecorativeLine variant="forHeading" />

            <AnimateOnView className="h2-animate">
                <h2>Strona internetowa ROD ,,Stokrotka'' w Sanoku</h2>
            </AnimateOnView>
            <p className="mx-auto mb-8 max-w-3xl text-left sm:text-center">
                Zachęcamy Działkowców do odwiedzania naszej strony internetowej poświęconej
                Rodzinnym Ogrodom Działkowym „Stokrotka” w Sanoku. Tutaj publikujemy{' '}
                <Link href={ROUTES.ANNOUNCEMENTS.path} className="link-context">
                    ogłoszenia
                </Link>
                ,{' '}
                <Link href={ROUTES.INFORMATIONS.path} className="link-context">
                    informacje organizacyjne
                </Link>{' '}
                oraz wszelkie{' '}
                <Link href={ROUTES.MEMORIES.path} className="link-context">
                    wspomnienia
                </Link>{' '}
                z wydarzeń dotyczące życia naszego ogrodu. Znajdą tu Państwo również przydatne
                materiały i dokumenty, ciekawe zdjęcia oraz porady ogrodowe, które pomogą w
                pielęgnacji działek.
            </p>

            <Link href={ROUTES.ABOUT_US.path} className="btn btn-lg btn-primary mx-auto">
                Dowiedz się więcej o nas <ArrowRight />
            </Link>
        </PageSection>
    );
}
