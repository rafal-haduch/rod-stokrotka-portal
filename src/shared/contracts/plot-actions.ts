import { ErrorCode } from '@/shared/error/error-codes';

// CREATE
export interface CreatePlotSuccess {
    success: true;
    data: {
        plotNumber: string;
        area: number | null;
    };
}

export interface CreatePlotError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type CreatePlotResult = CreatePlotSuccess | CreatePlotError;

// UPDATE
export interface UpdatePlotSuccess {
    success: true;
}

export interface UpdatePlotError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type UpdatePlotResult = UpdatePlotSuccess | UpdatePlotError;

// DELETE
export interface DeletePlotSuccess {
    success: true;
}

export interface DeletePlotError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type DeletePlotResult = DeletePlotSuccess | DeletePlotError;
