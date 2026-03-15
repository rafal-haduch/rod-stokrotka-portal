import { validateId } from '@/shared/utils/validate-id';
import { validatePlotArea, validatePlotNumber } from './plot-validation';

// CREATE PLOT ACTION
export interface CreatePlotInput {
    plotNumber: string;
    area: number | null;
}

export function parseCreatePlotInput(formData: FormData): CreatePlotInput {
    const plotNumberRaw = formData.get('plotNumber');
    const areaRaw = formData.get('area');

    const plotNumber = validatePlotNumber(plotNumberRaw);
    const area = validatePlotArea(areaRaw);

    return {
        plotNumber,
        area,
    };
}

// UPDATE PLOT ACTION
export interface UpdatePlotInput {
    id: number;
    plotNumber: string;
    area: number | null;
}

export function parseUpdatePlotInput(formData: FormData): UpdatePlotInput {
    const idRaw = formData.get('id');
    const plotNumberRaw = formData.get('plotNumber');
    const areaRaw = formData.get('area');

    const id = validateId(idRaw);
    const plotNumber = validatePlotNumber(plotNumberRaw);
    const area = validatePlotArea(areaRaw);

    return {
        id,
        plotNumber,
        area,
    };
}

// DELETE PLOT ACTION
export interface DeletePlotInput {
    id: number;
}

export function parseDeletePlotInput(formData: FormData): DeletePlotInput {
    const idRaw = formData.get('id');

    const id = validateId(idRaw);

    return {
        id,
    };
}
