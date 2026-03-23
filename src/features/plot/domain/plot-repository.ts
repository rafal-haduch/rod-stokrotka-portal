import { prisma } from '@/shared/lib/prisma';

import { PlotTableRowsFromDb, plotTableRowsSelect } from '@/features/plot/domain/plot-db-types';
import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

interface CreatePlotData {
    number: string;
    area: number | null;
}

interface UpdatePlotData {
    id: number;
    number: string;
    area: number | null;
}

export const plotRepository = {
    async create({ number, area }: CreatePlotData) {
        return await prisma.plot.create({
            data: { number, area },
        });
    },

    async update({ id, number, area }: UpdatePlotData) {
        return await prisma.plot.update({
            where: { id },
            data: { number, area },
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

    async findByIdWithOwner(id: number) {
        return prisma.plot.findUnique({
            where: { id },
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    },

    async findMany() {
        return prisma.plot.findMany();
    },

    async findManyWithOwner() {
        return prisma.plot.findMany({
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    },

    // ===========================
    // === Special for queries ===
    // ===========================

    async getAvailablePlotsWithOwner(): Promise<
        (PlotMinimalReference & { ownerId: number | null })[]
    > {
        return prisma.plot.findMany({
            orderBy: { number: 'asc' },
            select: {
                id: true,
                number: true,
                ownerId: true,
            },
        });
    },

    async getUserTableRows(): Promise<PlotTableRowsFromDb> {
        return await prisma.plot.findMany(plotTableRowsSelect);
    },
};
