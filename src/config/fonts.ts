import { Nunito, Fleur_De_Leah, Aboreto, Merriweather } from 'next/font/google';

export const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-nunito',
});

export const fleurDeLeah = Fleur_De_Leah({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-fleur-de-leah',
});

export const aboreto = Aboreto({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-aboreto',
});

export const merriweather = Merriweather({
    weight: ['400', '600', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-merriweather',
});
