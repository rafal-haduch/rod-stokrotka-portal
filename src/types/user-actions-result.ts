import { Role } from '@prisma/client';

// CREATE
export type CreateUserSuccess = {
    success: true;
    data: {
        name: string;
        role: Role;
        login: string;
        password: string;
    };
};

export type CreateUserError = {
    success: false;
    error: string;
};

export type CreateUserResult = CreateUserSuccess | CreateUserError;

// UPDATE
export type UpdateUserSuccess = {
    success: true;
};

export type UpdateUserError = {
    success: false;
    errorMsg: string;
};

export type UpdateUserResult = UpdateUserSuccess | UpdateUserError;

// DELETE
export type DeleteUserSuccess = {
    success: true;
};

export type DeleteUserError = {
    success: false;
    errorMsg: string;
};

export type DeleteUserResult = DeleteUserSuccess | DeleteUserError;

// CHANGE PASSWORD
export type ChangePasswordSuccess = {
    success: true;
};

export type ChangePasswordError = {
    success: false;
    errorMsg: string;
};

export type ChangePasswordResult = ChangePasswordSuccess | ChangePasswordError;
