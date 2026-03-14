import { ErrorCode } from '@/shared/error/error-codes';

export interface ActionResultSuccessWithData<T> {
    success: true;
    data: T;
}

export interface ActionResultSuccessVoid {
    success: true;
}

export interface ActionResultError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type ActionResult<T> = T extends void
    ? ActionResultSuccessVoid | ActionResultError
    : ActionResultSuccessWithData<T> | ActionResultError;
