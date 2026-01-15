import { prisma } from '../prisma';

interface CreatePlotData {
    plotNumber: string;
    area: number | null;
}

interface UpdatePlotData {
    id: number;
    plotNumber: string;
    area: number | null;
}

interface DeletePlotData {
    id: number;
}

export const plotRepository = {
    async create({ plotNumber, area }: CreatePlotData) {
        console.log('Plot number: ' + plotNumber);
        return await prisma.plot.create({
            data: { plotNumber, area },
        });
    },

    async update({ id, plotNumber, area }: UpdatePlotData) {
        console.log({ id, plotNumber, area, typeOfArea: typeof area });
        await prisma.plot.update({
            where: { id },
            data: { plotNumber, area },
        });
    },

    async delete({ id }: DeletePlotData) {
        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { plotId: id },
            });

            await tx.plot.delete({
                where: { id },
            });
        });
    },
};
