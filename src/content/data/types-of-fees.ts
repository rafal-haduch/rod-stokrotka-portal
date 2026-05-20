<<<<<<< HEAD:src/content/data/types-of-fees.ts
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
=======
interface TypesOfFees {
    fee: string;
    amount: string;
}

export const typesOfFees: TypesOfFees[] = [
    { fee: 'działka', amount: '0,70 zł / m2' },
    { fee: 'nieczystości', amount: '50 zł' },
    { fee: 'składka członkowska', amount: '25 zł' },
    { fee: 'energia', amount: 'według zużycia' },
] as const;
>>>>>>> hotfix:src/data/typesOfFees.ts
