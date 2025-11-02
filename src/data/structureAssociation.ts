interface structureAssociation {
    person: string;
    position: string;
}

export const associationBoard: structureAssociation[] = [
    { person: 'Maciej Uruski', position: 'prezes' },
    { person: 'Zbigniew Gajda', position: 'wiceprezes' },
    { person: 'Katarzyna Wojdyła', position: 'sekretarz' },
    { person: 'Urszula Martuszewska', position: 'skarbnik' },
];

export const auditCommittee: structureAssociation[] = [
    { person: 'Krystyna Wojtowicz', position: 'przewodnicząca' },
    { person: 'Renata Olbert', position: 'członek komisji' },
    { person: 'Piotr Kaliniecki', position: 'członek komisji' },
];

export const arbitrationCommission: structureAssociation[] = [
    { person: 'Marzena Kalbarczyk', position: 'przewodnicząca' },
    { person: 'Bogdan Jagielski', position: 'członek komisji' },
    { person: 'Halina Cecuła', position: 'członek komisji' },
];

export const asOf = '17.05.2025';
