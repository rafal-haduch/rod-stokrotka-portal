// CREATE
export type CreatePlotSuccess = {
    success: true;
    data: {
        plotNumber: string;
        area: number;
    };
};

export type CreatePlotError = {
    success: false;
    errorMsg: string;
};

export type CreatePlotResult = CreatePlotSuccess | CreatePlotError;

// UPDATE
export type UpdatePlotSuccess = {
    success: true;
};

export type UpdatePlotError = {
    success: false;
    errorMsg: string;
};

export type UpdatePlotResult = UpdatePlotSuccess | UpdatePlotError;

// DELETE
export type DeletePlotSuccess = {
    success: true;
};

export type DeletePlotError = {
    success: false;
    errorMsg: string;
};

export type DeletePlotResult = DeletePlotSuccess | DeletePlotError;
