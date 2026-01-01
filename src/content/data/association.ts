// ============
// === Data ===
// ============

interface AssociationDataItem {
    label: string;
    data: string;
}

export const associationData: AssociationDataItem[] = [
    { label: 'KRS', data: '0000539144 ' },
    { label: 'NIP', data: '6871959648 ' },
    { label: 'REGON', data: '360573323 ' },
] as const;

export const associationEmail = 'rod.stokrotka.sanok@gmail.com' as const;

export const associationPhoneNumber = '--- --- ---' as const;

// =================
// === Structure ===
// =================

interface structureAssociation {
    person: string;
    position: string;
}

export const structureAssociationAsOf = '17.05.2025' as const;

export const associationBoard: structureAssociation[] = [
    { person: 'Maciej Uruski', position: 'prezes' },
    { person: 'Zbigniew Gajda', position: 'wiceprezes' },
    { person: 'Katarzyna Wojdyła', position: 'sekretarz' },
    { person: 'Urszula Martuszewska', position: 'skarbnik' },
] as const;

export const auditCommittee: structureAssociation[] = [
    { person: 'Krystyna Wojtowicz', position: 'przewodnicząca' },
    { person: 'Renata Olbert', position: 'członek komisji' },
    { person: 'Piotr Kaliniecki', position: 'członek komisji' },
] as const;

export const arbitrationCommission: structureAssociation[] = [
    { person: 'Marzena Kalbarczyk', position: 'przewodnicząca' },
    { person: 'Bogdan Jagielski', position: 'członek komisji' },
    { person: 'Halina Cecuła', position: 'członek komisji' },
] as const;
