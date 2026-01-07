'use server';

import { prisma } from '@/lib/prisma';

import { DeletePlotResult } from '@/types/plotActionResult';

export async function deletePlot(formData: FormData): Promise<DeletePlotResult> {
    try {
        const id = Number(formData.get('id'));

        await prisma.plot.delete({
            where: { id },
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas usuwania działki!',
        };
    }
}
