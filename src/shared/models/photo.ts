export interface PhotoWithoutTitle {
    src: string;
    alt: string;
}

export interface PhotoWithTitle {
    src: string;
    alt: string;
    title?: string;
}
