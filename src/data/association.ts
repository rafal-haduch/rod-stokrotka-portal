export const ASSOCIATION_NAME = 'Stowarzyszenie Ogrodowe "Stokrotka"';

interface AssociationRegistryEntry {
    label: string;
    value: string;
}

export const associationRegistrationNumbers = [
    { label: 'KRS', value: '0000539144' },
    { label: 'NIP', value: '6871959648' },
    { label: 'REGON', value: '360573323' },
] as const satisfies readonly AssociationRegistryEntry[];
