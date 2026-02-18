import { Role } from '@prisma/client';
import { ErrorCode } from '@/domain/error/error-codes';

// CREATE
export interface CreateUserSuccess {
    success: true;
    data: {
        name: string;
        role: Role;
        login: string;
        password: string;
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
