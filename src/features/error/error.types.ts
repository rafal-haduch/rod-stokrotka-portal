import { ErrorCode } from '@/features/error/error-codes';

export interface ActionError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}
