import { UserRole } from '@prisma/client';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

export interface UserBase {
    id: number;
    name: string;
    role: UserRole;
}

export interface PlotIdsAssignedToUser {
    ownedPlotIds: number[];
    coOwnedPlotIds: number[];
    usedPlotIds: number[];
}

export interface PlotsAssignedToUser {
    ownedPlots: PlotMinimalReference[];
    coOwnedPlots: PlotMinimalReference[];
    usedPlots: PlotMinimalReference[];
}
