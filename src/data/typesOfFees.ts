interface TypesOfFees {
    fee: string;
    amount: string;
}

export const typesOfFees: TypesOfFees[] = [
    { fee: 'działka', amount: '0,60 zł / m2' },
    { fee: 'nieczystości', amount: '50 zł' },
    { fee: 'składka członkowska', amount: '25 zł' },
    { fee: 'energia', amount: 'według zużycia' },
] as const;
