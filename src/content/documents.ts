export interface DownloadableDocument {
    title: string;
    href: string;
}

export const governingAndGardenDocuments = [
    { title: 'Statut', href: '/documents/Statut_ROD_Stokrotka.pdf' },
    { title: 'Regulamin', href: '/documents/Regulamin_ROD_Stokrotka.pdf' },
    {
        title: 'Plan zagospodarowania',
        href: '/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf',
    },
] as const satisfies readonly DownloadableDocument[];

export const formsAndAgreements = [
    {
        title: 'Umowa dzierżawy działkowej',
        href: '/documents/Umowa_Dzierzawy_Dzialkowej.pdf',
    },
    {
        title: 'Deklaracja członkowska',
        href: '/documents/Deklaracja_Czlonkowska.pdf',
    },
    {
        title: 'Decyzja przydziału działki',
        href: '/documents/Decyzja_Przydzialu_Dzialki.pdf',
    },
    {
        title: 'Przeniesienie prawa do działki',
        href: '/documents/Umowa_Przeniesienia_Prawa_Do_Dzialki.pdf',
    },
    {
        title: 'Rezygnacja z uprawy działki',
        href: '/documents/Rezygnacja_Z_Uprawy_Dzialki.pdf',
    },
] as const satisfies readonly DownloadableDocument[];

export const meetingMinutes = [
    {
        title: 'Protokół walnego zebrania 2025r',
        href: '/documents/Protokol_Zebrania_17.05.2025.pdf',
    },
] as const satisfies readonly DownloadableDocument[];
