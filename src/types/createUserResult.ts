import { Role } from '@prisma/client';

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
