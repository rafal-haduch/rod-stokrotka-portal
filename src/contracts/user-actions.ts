import { Role } from '@prisma/client';
import { ErrorCode } from '@/features/error/error-codes';
import { PlotMinimalReference } from '@/features/plot/plot.read-models';
import { ActionError } from '@/features/error/error.types';

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

export type CreateUserResult = CreateUserSuccess | ActionError;

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

export type UpdateUserResult = UpdateUserSuccess | ActionError;

// DELETE
export interface DeleteUserSuccess {
    success: true;
}

export type DeleteUserResult = DeleteUserSuccess | ActionError;

// CHANGE PASSWORD
export interface ChangePasswordSuccess {
    success: true;
}

export type ChangePasswordResult = ChangePasswordSuccess | ActionError;
