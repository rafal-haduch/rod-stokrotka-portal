'use server';

import { prisma } from '@/lib/prisma';

import { UpdatePlotResult } from '@/types/plot-actions-result';

export async function updatePlot(formData: FormData): Promise<UpdatePlotResult> {
    try {
        const idRaw = formData.get('id');
        const plotNumberRaw = formData.get('plotNumber');
        const areaRaw = formData.get('area');

        if (typeof plotNumberRaw !== 'string' || plotNumberRaw.length === 0) {
            throw new Error('Invalid plot number');
        }

        //HACK
        if (plotNumberRaw.toLocaleLowerCase() === 'error') {
            throw new Error('Test error result');
        }

        const id = Number(idRaw);
        const plotNumber = plotNumberRaw as string;
        const area = Number(areaRaw);

        await prisma.plot.update({
            where: { id },
            data: { plotNumber, area },
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas zmiany danych dzialki!',
        };
    }
}
