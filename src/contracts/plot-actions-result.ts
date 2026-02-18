import { ErrorCode } from '@/domain/error/error-codes';

// CREATE
export type CreatePlotSuccess = {
    success: true;
    data: {
        plotNumber: string;
        area: number | null;
    };
};

export type CreatePlotError = {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
};

export type CreatePlotResult = CreatePlotSuccess | CreatePlotError;

// UPDATE
export type UpdatePlotSuccess = {
    success: true;
};

export type UpdatePlotError = {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
};

export type UpdatePlotResult = UpdatePlotSuccess | UpdatePlotError;

// DELETE
export type DeletePlotSuccess = {
    success: true;
};

export type DeletePlotError = {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
};

export type DeletePlotResult = DeletePlotSuccess | DeletePlotError;
