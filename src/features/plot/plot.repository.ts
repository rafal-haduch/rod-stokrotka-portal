import { prisma } from '@/lib/prisma';
import { PlotOption } from './plot.read-models';

interface CreatePlotData {
    plotNumber: string;
    area: number | null;
}

interface UpdatePlotData {
    id: number;
    plotNumber: string;
    area: number | null;
}

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

    async delete(id: number) {
        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { plotId: id },
            });

            await tx.plot.delete({
                where: { id },
            });
        });
    },

    async findById(id: number) {
        return prisma.plot.findUnique({
            where: { id },
        });
    },

    async findByIdWithOwners(id: number) {
        return prisma.plot.findUnique({
            where: { id },
            include: {
                ownersId: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    },

    async findMany() {
        return prisma.plot.findMany();
    },

    async findManyWithOwners() {
        return prisma.plot.findMany({
            include: {
                ownersId: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    },

    // ===========================
    // === Special for queries ===
    // ===========================

    async getPlotOptions(): Promise<PlotOption[]> {
        return prisma.plot.findMany({
            orderBy: { plotNumber: 'asc' },
            select: {
                id: true,
                plotNumber: true,
            },
        });
    },
};
