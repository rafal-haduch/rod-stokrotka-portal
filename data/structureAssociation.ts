interface associationBoard {
    person: string;
    position: string;
}

export const associationBoard: associationBoard[] = [
    { person: 'Maciej Uruski', position: 'prezes' },
    { person: 'Zbigniew Gajda', position: 'wiceprezes' },
    { person: 'Katarzyna Wojdyła', position: 'sekretarz' },
    { person: 'Urszula Martuszewska', position: 'skarbnik' },
];

interface auditCommittee {
    person: string;
    position: string;
}

//TODO: position of the person on the audit committee
export const auditCommittee: auditCommittee[] = [
    { person: 'Krystyna Wojtowicz', position: 'przewodnicząca' },
    { person: 'Renata Olbert', position: '?' },
    { person: 'Piotr Kaliniecki', position: '?' },
];

export const asOf = '17.05.2025';
