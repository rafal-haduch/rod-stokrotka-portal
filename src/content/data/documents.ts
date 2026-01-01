export interface Document {
    name: string;
    href: string;
}

export const importantDocuments: Document[] = [
    { name: 'Statut.pdf', href: '/documents/Statut_ROD_Stokrotka.pdf' },
    { name: 'Regulamin.pdf', href: '/documents/Regulamin_ROD_Stokrotka.pdf' },
    {
        name: 'Plan_Zagospodarowania.pdf',
        href: '/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf',
    },
] as const;

export const templatesAndForms: Document[] = [
    {
        name: 'Umowa_Dzierżawy_Działkowej.pdf',
        href: '/documents/Umowa_Dzierzawy_Dzialkowej.pdf',
    },
    {
        name: 'Deklaracja_Członkowska.pdf',
        href: '/documents/Deklaracja_Czlonkowska.pdf',
    },
    {
        name: 'Decyzja_Przydziału_Działki.pdf',
        href: '/documents/Decyzja_Przydzialu_Dzialki.pdf',
    },
    {
        name: 'Przeniesienie_Prawa_Do_Działki.pdf',
        href: '/documents/Umowa_Przeniesienia_Prawa_Do_Dzialki.pdf',
    },
    {
        name: 'Rezygnacja_Z_Uprawy_Działki.pdf',
        href: '/documents/Rezygnacja_Z_Uprawy_Dzialki.pdf',
    },
] as const;

export const minutesAndReports: Document[] = [
    {
        name: 'Protokół_Zebrania_17.05.2025.pdf',
        href: '/documents/Protokol_Zebrania_17.05.2025.pdf',
    },
] as const;
