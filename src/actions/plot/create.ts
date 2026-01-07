'use server';

import { prisma } from '@/lib/prisma';

import { CreatePlotResult } from '@/types/plotActionResult';

export async function createPlot(formData: FormData): Promise<CreatePlotResult> {
    try {
        const plotNumberRaw = formData.get('plotNumber');
        const areaRaw = formData.get('area');

        if (typeof plotNumberRaw !== 'string' || plotNumberRaw.length === 0) {
            throw new Error('Invalid plot number');
        }

        const plotNumber = plotNumberRaw as string;

        const area = Number(areaRaw);
        // if (Number.isNaN(area)) {
        //     throw new Error('Area must be a number');
        // }

        //HACK
        if (plotNumberRaw.toLocaleLowerCase() === 'error') {
            throw new Error('Test error result');
        }

        await prisma.plot.create({
            data: {
                plotNumber,
                area,
            },
        });

        console.log('Error');

        return {
            success: true,
            data: {
                plotNumber,
                area,
            },
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas dodawania nowej działki!',
        };
    }
}
