// ================================
// === Association Contact Data ===
// ================================

export const associationEmail = 'rod.stokrotka.sanok@gmail.com' as const;

export const associationPhoneNumber = '--- --- ---' as const;

// ==================================
// === Association Office Address ===
// ==================================

export const associationOfficeStreet = 'ul. Wolna 12/8' as const;

export const associationOfficePostalCode = '38-500' as const;

export const associationOfficeCity = 'Sanok' as const;

// ==============================
// === Association Legal Data ===
// ==============================

interface AssociationLegalData {
    label: string;
    data: string;
}

export const associationLegalData: AssociationLegalData[] = [
    { label: 'KRS', data: '0000539144' },
    { label: 'NIP', data: '6871959648' },
    { label: 'REGON', data: '360573323' },
] as const;

// ========================================
// === Governance Association Structure ===
// ========================================

export const governanceAssociationStructureAsOf = '17.05.2025' as const;

export interface GovernanceAssociationStructure {
    person: string;
    position: string;
}

export const associationBoard: GovernanceAssociationStructure[] = [
    { person: 'Maciej Uruski', position: 'prezes' },
    { person: 'Zbigniew Gajda', position: 'wiceprezes' },
    { person: 'Katarzyna Wojdyła', position: 'sekretarz' },
    { person: 'Urszula Martuszewska', position: 'skarbnik' },
] as const;

export const auditCommittee: GovernanceAssociationStructure[] = [
    { person: 'Krystyna Wojtowicz', position: 'przewodnicząca' },
    { person: 'Renata Olbert', position: 'członek komisji' },
    { person: 'Piotr Kaliniecki', position: 'członek komisji' },
] as const;

export const arbitrationCommission: GovernanceAssociationStructure[] = [
    { person: 'Marzena Kalbarczyk', position: 'przewodnicząca' },
    { person: 'Bogdan Jagielski', position: 'członek komisji' },
    { person: 'Halina Cecuła', position: 'członek komisji' },
] as const;
