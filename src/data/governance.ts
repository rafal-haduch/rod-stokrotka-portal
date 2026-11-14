export type BoardPosition = 'Prezes' | 'Wiceprezes' | 'Sekretarz' | 'Skarbnik';

export type CommitteePosition = 'Przewodniczący' | 'Przewodnicząca' | 'Członek komisji';

export interface GovernanceMember<Position extends string> {
    name: string;
    position: Position;
}

export const governanceElectedOn = '17.05.2025';

export const associationBoard: GovernanceMember<BoardPosition>[] = [
    { name: 'Maciej Uruski', position: 'Prezes' },
    { name: 'Zbigniew Gajda', position: 'Wiceprezes' },
    { name: 'Katarzyna Wojdyła', position: 'Sekretarz' },
    { name: 'Urszula Martuszewska', position: 'Skarbnik' },
] as const;

export const auditCommittee: GovernanceMember<CommitteePosition>[] = [
    { name: 'Krystyna Wojtowicz', position: 'Przewodnicząca' },
    { name: 'Renata Olbert', position: 'Członek komisji' },
    { name: 'Piotr Kaliniecki', position: 'Członek komisji' },
] as const;

export const arbitrationCommittee: GovernanceMember<CommitteePosition>[] = [
    { name: 'Marzena Kalbarczyk', position: 'Przewodnicząca' },
    { name: 'Bogdan Jagielski', position: 'Członek komisji' },
    { name: 'Halina Cecuła', position: 'Członek komisji' },
] as const;
