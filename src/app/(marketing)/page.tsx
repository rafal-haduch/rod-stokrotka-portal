import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import { WorkInProgress } from '@/components/work-in-progress';
import { DecorativeLine } from '@/components/decorative-line';
import { AnimateOnView } from '@/components/animated-h2';
import { CustomButton } from '@/components/custom-button';

export default function HomePage() {
    return (
        <>
            <h1>Strona Główna</h1>
            <DecorativeLine variant="forHeading" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Strona internetowa ROD ,,Stokrotka'' w Sanoku</h2>
                </AnimateOnView>
                <p className="mx-auto mb-8 max-w-5xl text-left sm:text-center">
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
            </section>

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Ostatnie Ogłoszenia</h2>
                </AnimateOnView>
                <WorkInProgress />
                <CustomButton
                    href={ROUTES.ANNOUNCEMENTS.path}
                    size="lg"
                    variant="primary"
                    className="mx-auto"
                >
                    Zobacz więcej
                    <ArrowRight />
                </CustomButton>
            </section>

            <DecorativeLine variant="forContent" />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Galeria ogrodu „Stokrotka” w Sanoku</h2>
                </AnimateOnView>
                <WorkInProgress />
                {/* <MainSlider /> */}
                <CustomButton
                    href={ROUTES.GALLERY.path}
                    size="lg"
                    variant="primary"
                    className="mx-auto"
                >
                    Zobacz więcej
                    <ArrowRight />
                </CustomButton>
            </section>
        </>
    );
}
