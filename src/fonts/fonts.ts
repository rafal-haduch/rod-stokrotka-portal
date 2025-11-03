import localFont from 'next/font/local';

export const nunito = localFont({
    src: [{ path: '../fonts/Nunito-Regular.ttf', weight: '400', style: 'normal' }],
    variable: '--font-nunito',
});

export const fleurDeLeah = localFont({
    src: [
        {
            path: '../fonts/FleurDeLeah-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-fleurdeleah',
});

export const aboreto = localFont({
    src: [
        {
            path: '../fonts/Aboreto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-aboreto',
});

export const merriweather = localFont({
    src: [
        {
            path: '../fonts/Merriweather_24pt-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-merriweather',
});
