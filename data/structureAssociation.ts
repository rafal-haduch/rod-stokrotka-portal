interface associationBoard {
    person: string;
    position: string;
}

export const associationBoard: associationBoard[] = [
    { person: 'Imie Nazwisko', position: 'prezes' },
    { person: 'Imie Nazwisko', position: 'wiceprezes' },
    { person: 'Imie Nazwisko', position: 'sekretarz' },
    { person: 'Imie Nazwisko', position: 'skarbnik' },
];

interface auditCommittee {
    person: string;
    position: string;
}

//TODO: position of the person on the audit committee
export const auditCommittee: auditCommittee[] = [
    { person: 'Imie Nazwisko', position: 'przewodniczący' },
    { person: 'Imie Nazwisko', position: '?' },
    { person: 'Imie Nazwisko', position: '?' },
];

export const asOf = '17.05.2025';
