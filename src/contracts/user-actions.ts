import { Role } from '@prisma/client';
import { ErrorCode } from '@/features/error/error-codes';
import { PlotMinimalReference } from '@/features/plot/plot.read-models';

// CREATE
export interface CreateUserSuccess {
    success: true;
    data: {
        id: number;
        name: string;
        plots: PlotMinimalReference[];
        role: Role;
        login: string;
        password: string;
        createdAt: Date;
        lastLogin: Date | null;
    };
}

export interface CreateUserError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type CreateUserResult = CreateUserSuccess | CreateUserError;

// UPDATE
export interface UpdateUserSuccess {
    success: true;
    data: {
        id: number;
        name: string;
        plots: PlotMinimalReference[];
        role: Role;
        createdAt: Date;
        lastLogin: Date | null;
    };
}

export interface UpdateUserError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type UpdateUserResult = UpdateUserSuccess | UpdateUserError;

// DELETE
export interface DeleteUserSuccess {
    success: true;
}

export interface DeleteUserError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type DeleteUserResult = DeleteUserSuccess | DeleteUserError;

// CHANGE PASSWORD
export interface ChangePasswordSuccess {
    success: true;
}

export interface ChangePasswordError {
    success: false;
    errorCode: ErrorCode;
    errorMsg: string;
}

export type ChangePasswordResult = ChangePasswordSuccess | ChangePasswordError;
