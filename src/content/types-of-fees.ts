interface AnnualFeeItem {
    /** Name of the fee shown in the table. */
    label: string;

    /** Amount or calculation basis displayed in the table. */
    amountDescription: string;
}

export const annualFeeItems = [
    { label: 'Powierzchnia działki', amountDescription: '0,70 zł / m²' },
    { label: 'Wywóz nieczystości', amountDescription: '50 zł' },
    { label: 'Składka członkowska', amountDescription: '25 zł' },
    { label: 'Energia elektryczna', amountDescription: 'według zużycia' },
] as const satisfies readonly AnnualFeeItem[];
