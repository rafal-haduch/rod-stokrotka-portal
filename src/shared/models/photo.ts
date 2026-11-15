/**
 * Base photo type with required `src` and `alt` fields.
 * Metadata fields are optional. Use the provided photo interfaces
 * (`PhotoWithTitle`, `PhotoWithDate`, `PhotoWithAuthor`, `PhotoWithPlot`)
 * to make specific fields required when needed.
 *
 * @example Using an intersection type
 * type ArticlePhoto = Photo & PhotoWithTitle & PhotoWithDate;
 */
export interface Photo {
    src: string;
    alt: string;
    title?: string;
    date?: string;
    author?: string;
    plotNumber?: string;
}

export interface PhotoWithTitle {
    title: string;
}

export interface PhotoWithDate {
    date: string;
}

export interface PhotoWithAuthor {
    author: string;
}

export interface PhotoWithPlot {
    plotNumber: string;
}
