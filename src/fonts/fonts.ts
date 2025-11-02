import localFont from 'next/font/local';

export const lato = localFont({
    src: [
        { path: '../fonts/Nunito-Regular.ttf', weight: '400', style: 'normal' },
    ],
    variable: '--font-lato',
});

export const bonheurRoyale = localFont({
    src: [
        {
            path: '../fonts/FleurDeLeah-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-bonheurroyale',
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

export const libreBodoni = localFont({
    src: [
        {
            path: '../fonts/Merriweather_24pt-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-librebodoni',
});
