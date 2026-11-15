interface RecommendedSite {
    /** Name of the recommended site. */
    name: string;

    /** Human-readable text displayed instead of the destination URL. */
    linkContext: string;

    /** Destination URL of the recommended site. */
    url: string;
}

export const recommendedSites = [
    {
        name: 'Program Maja w ogrodzie',
        linkContext: 'www.player.pl/maja-w-ogrodzie',
        url: 'https://player.pl/programy-online/nowa-maja-w-ogrodzie-odcinki,5007',
    },
    {
        name: 'Strona Fajny Ogród',
        linkContext: 'www.fajnyogród.pl',
        url: 'https://fajnyogrod.pl/',
    },
    {
        name: 'Strona Porady Ogrodnicze',
        linkContext: 'www.poradyogrodnicze.pl',
        url: 'https://www.poradyogrodnicze.pl/',
    },
    {
        name: 'Forum Ogrodniczo Działkowe',
        linkContext: 'www.forumogrodnicze.pl',
        url: 'https://forumogrodnicze.info/',
    },
] as const satisfies readonly RecommendedSite[];
