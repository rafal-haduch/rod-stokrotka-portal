export type UpdateUserSuccess = {
    success: true;
};

export type UpdateUserError = {
    success: false;
    errorMsg: string;
};

export type UpdateUserResult = UpdateUserSuccess | UpdateUserError;
