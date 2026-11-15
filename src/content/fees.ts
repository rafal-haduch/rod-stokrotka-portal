interface Fee {
    /** Internal plot identifier derived from its plot number (e.g. `D001` or `D23A`). */
    id: string;

    /** Plot number assigned within the garden. */
    plotNumber: string;

    /** Plot area in square metres (m²), used to calculate the area-based fee. */
    plotArea: number;

    /** Electricity charge for the season, in PLN; omit if the plot has no electricity connection, use `0` if connected with no consumption. */
    electricityChargeAmount?: number;
}

export const dataForFeeSchedule = [
    {
        id: 'D000',
        plotNumber: '0',
        plotArea: 421,
        electricityChargeAmount: 14.8,
    },
    {
        id: 'D001',
        plotNumber: '1',
        plotArea: 420,
        electricityChargeAmount: 0,
    },
    {
        id: 'D002',
        plotNumber: '2',
        plotArea: 383,
        electricityChargeAmount: 59.2,
    },
    {
        id: 'D003',
        plotNumber: '3',
        plotArea: 319,
        electricityChargeAmount: 0,
    },
    {
        id: 'D004',
        plotNumber: '4',
        plotArea: 460,
        electricityChargeAmount: 18.5,
    },
    {
        id: 'D005',
        plotNumber: '5',
        plotArea: 365,
        electricityChargeAmount: 368.15,
    },
    {
        id: 'D006',
        plotNumber: '6',
        plotArea: 402,
        electricityChargeAmount: 0,
    },
    {
        id: 'D007',
        plotNumber: '7',
        plotArea: 401,
        electricityChargeAmount: 0,
    },
    {
        id: 'D008',
        plotNumber: '8',
        plotArea: 401,
        electricityChargeAmount: 0,
    },
    {
        id: 'D009',
        plotNumber: '9',
        plotArea: 382,
        electricityChargeAmount: 0,
    },
    {
        id: 'D010',
        plotNumber: '10',
        plotArea: 383,
        electricityChargeAmount: 105.45,
    },
    {
        id: 'D011',
        plotNumber: '11',
        plotArea: 360,
        electricityChargeAmount: 0,
    },
    {
        id: 'D012',
        plotNumber: '12',
        plotArea: 424,
        electricityChargeAmount: 0,
    },
    {
        id: 'D013',
        plotNumber: '13',
        plotArea: 375,
        electricityChargeAmount: 0,
    },
    {
        id: 'D014',
        plotNumber: '14',
        plotArea: 479,
        electricityChargeAmount: 35.15,
    },
    {
        id: 'D015',
        plotNumber: '15',
        plotArea: 369,
        electricityChargeAmount: 0,
    },
    {
        id: 'D016',
        plotNumber: '16',
        plotArea: 425,
        electricityChargeAmount: 0,
    },
    {
        id: 'D017',
        plotNumber: '17',
        plotArea: 398,
        electricityChargeAmount: 0,
    },
    {
        id: 'D018',
        plotNumber: '18',
        plotArea: 397,
        electricityChargeAmount: 0,
    },
    {
        id: 'D019',
        plotNumber: '19',
        plotArea: 396,
        electricityChargeAmount: 0,
    },
    {
        id: 'D020',
        plotNumber: '20',
        plotArea: 392,
        electricityChargeAmount: 11.1,
    },
    {
        id: 'D021',
        plotNumber: '21',
        plotArea: 357,
        electricityChargeAmount: 14.8,
    },
    {
        id: 'D022',
        plotNumber: '22',
        plotArea: 358,
        electricityChargeAmount: 0,
    },
    {
        id: 'D023',
        plotNumber: '23',
        plotArea: 368,
        electricityChargeAmount: 0,
    },
    {
        id: 'D024',
        plotNumber: '24',
        plotArea: 380,
        electricityChargeAmount: 1.85,
    },
    {
        id: 'D025',
        plotNumber: '25',
        plotArea: 322,
        electricityChargeAmount: 5.55,
    },
    {
        id: 'D25A',
        plotNumber: '25A',
        plotArea: 347,
        electricityChargeAmount: 1.6,
    },
    {
        id: 'D026',
        plotNumber: '26',
        plotArea: 337,
        electricityChargeAmount: 0,
    },
    {
        id: 'D027',
        plotNumber: '27',
        plotArea: 348,
        electricityChargeAmount: 0,
    },
    {
        id: 'D028',
        plotNumber: '28',
        plotArea: 387,
        electricityChargeAmount: 0,
    },
    {
        id: 'D029',
        plotNumber: '29',
        plotArea: 358,
        electricityChargeAmount: 16.65,
    },
    {
        id: 'D030',
        plotNumber: '30',
        plotArea: 360,
        electricityChargeAmount: 12.95,
    },
    {
        id: 'D031',
        plotNumber: '31',
        plotArea: 381,
        electricityChargeAmount: 114.7,
    },
    {
        id: 'D032',
        plotNumber: '32',
        plotArea: 408,
        electricityChargeAmount: 1.85,
    },
    {
        id: 'D034',
        plotNumber: '34',
        plotArea: 437,
        electricityChargeAmount: 14.8,
    },
    {
        id: 'D035',
        plotNumber: '35',
        plotArea: 324,
        electricityChargeAmount: 16.65,
    },
    {
        id: 'D35A',
        plotNumber: '35A',
        plotArea: 332,
        electricityChargeAmount: 0,
    },
    {
        id: 'D037',
        plotNumber: '37',
        plotArea: 581,
        electricityChargeAmount: 7.4,
    },
    {
        id: 'D038',
        plotNumber: '38',
        plotArea: 531,
        electricityChargeAmount: 0,
    },
    {
        id: 'D039',
        plotNumber: '39',
        plotArea: 605,
        electricityChargeAmount: 0,
    },
    {
        id: 'D040',
        plotNumber: '40',
        plotArea: 663,
        electricityChargeAmount: 44.4,
    },
    {
        id: 'D041',
        plotNumber: '41',
        plotArea: 600,
        electricityChargeAmount: 0,
    },
    {
        id: 'D042',
        plotNumber: '42',
        plotArea: 574,
        electricityChargeAmount: 0,
    },
    {
        id: 'D043',
        plotNumber: '43',
        plotArea: 587,
        electricityChargeAmount: 11.1,
    },
    {
        id: 'D044',
        plotNumber: '44',
        plotArea: 556,
        electricityChargeAmount: 0,
    },
    {
        id: 'D045',
        plotNumber: '45',
        plotArea: 618,
        electricityChargeAmount: 0,
    },
    {
        id: 'D046',
        plotNumber: '46',
        plotArea: 693,
        electricityChargeAmount: 0,
    },
    {
        id: 'D46A',
        plotNumber: '46A',
        plotArea: 322,
        electricityChargeAmount: 24.05,
    },
    {
        id: 'D047',
        plotNumber: '47',
        plotArea: 496,
        electricityChargeAmount: 5.55,
    },
    {
        id: 'D047A',
        plotNumber: '47A',
        plotArea: 291,
        electricityChargeAmount: 0,
    },
    {
        id: 'D048',
        plotNumber: '48',
        plotArea: 412,
        electricityChargeAmount: 86.95,
    },
    {
        id: 'D049',
        plotNumber: '49',
        plotArea: 311,
        electricityChargeAmount: 0,
    },
    {
        id: 'D050',
        plotNumber: '50',
        plotArea: 355,
        electricityChargeAmount: 0,
    },
    {
        id: 'D051',
        plotNumber: '51',
        plotArea: 394,
        electricityChargeAmount: 0,
    },
    {
        id: 'D052',
        plotNumber: '52',
        plotArea: 471,
        electricityChargeAmount: 0,
    },
    {
        id: 'D053',
        plotNumber: '53',
        plotArea: 394,
        electricityChargeAmount: 179.45,
    },
    {
        id: 'D054',
        plotNumber: '54',
        plotArea: 406,
        electricityChargeAmount: 0,
    },
    {
        id: 'D055',
        plotNumber: '55',
        plotArea: 417,
        electricityChargeAmount: 0,
    },
    {
        id: 'D056',
        plotNumber: '56',
        plotArea: 418,
        electricityChargeAmount: 0,
    },
    {
        id: 'D057',
        plotNumber: '57',
        plotArea: 410,
        electricityChargeAmount: 0,
    },
    {
        id: 'D058',
        plotNumber: '58',
        plotArea: 413,
        electricityChargeAmount: 0,
    },
    {
        id: 'D059',
        plotNumber: '59',
        plotArea: 419,
        electricityChargeAmount: 118.4,
    },
    {
        id: 'D060',
        plotNumber: '60',
        plotArea: 396,
        electricityChargeAmount: 1.85,
    },
] as const satisfies readonly Fee[];
