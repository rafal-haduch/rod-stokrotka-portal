import { prisma } from '@/lib/prisma';

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

interface GetPlotForDashboardForm {
    id: number;
}

interface GetPlotWithOwnersForDashboardForm {
    id: number;
}

interface GetPlotsList {}

export const plotRepository = {
    async create({ plotNumber, area }: CreatePlotData) {
        return await prisma.plot.create({
            data: { plotNumber, area },
        });
    },

    async update({ id, plotNumber, area }: UpdatePlotData) {
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

    async getPlotForDashboardForm({ id }: GetPlotForDashboardForm) {
        return prisma.plot.findUnique({
            where: { id },
        });
    },

    async getPlotWithOwnersForDashboardForm({ id }: GetPlotWithOwnersForDashboardForm) {
        return prisma.plot.findUnique({
            where: { id },
            include: {
                ownersId: {
                    select: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    },

    async getPlotsList() {
        return prisma.plot.findMany({
            select: {
                id: true,
                plotNumber: true,
            },
        });
    },

    async getPlotsForDashboardPage() {
        return prisma.plot.findMany({
            include: {
                ownersId: {
                    include: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    },
};
