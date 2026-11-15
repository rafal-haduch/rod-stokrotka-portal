import type { Photo } from '@/shared/models/photo';

const baseAlt = 'Zdjęcie z naszego ogrodu.';

export const galleryPhotos = [
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027149/001_fuv5zn.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027149/002_yf0mjt.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027149/003_cqluot.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027151/004_mflcz5.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027151/005_ajrjjt.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027153/006_exvbux.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027153/007_k106yv.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027154/008_ri915g.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027156/009_xxtuim.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027157/010_icevzk.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027157/011_mxczzs.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027292/012_ds4rwq.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027160/013_ta1eez.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027160/014_t6xsjq.jpg',
        alt: baseAlt,
    },
    {
        src: 'https://res.cloudinary.com/dc3xn9rpm/image/upload/v1764027161/015_hkakwv.jpg',
        alt: baseAlt,
    },
] as const satisfies readonly Photo[];
