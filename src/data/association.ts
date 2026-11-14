export const ASSOCIATION_NAME = 'Stowarzyszenie Ogrodowe "Stokrotka"';

interface AssociationLegalData {
    label: string;
    data: string;
}

export const associationLegalData: AssociationLegalData[] = [
    { label: 'KRS', data: '0000539144' },
    { label: 'NIP', data: '6871959648' },
    { label: 'REGON', data: '360573323' },
] as const;
