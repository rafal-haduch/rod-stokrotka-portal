export interface Document {
    name: string;
    href: string;
}

export const importantDocuments: Document[] = [
    { name: 'Regulamin.pdf', href: '/documents/Regulamin_ROD_Stokrotka.pdf' },
    { name: 'Statut.pdf', href: '/documents/Statut_ROD_Stokrotka.pdf' },
    {
        name: 'Plan_Zagospodarowania.pdf',
        href: '/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf',
    },
] as const;

export const templatesAndForms: Document[] = [] as const;

export const minutesAndReports: Document[] = [
    {
        name: 'Protokół_Zebrania_17.05.2025.pdf',
        href: '/documents/Protokol_Zebrania_17.05.2025.pdf',
    },
] as const;
