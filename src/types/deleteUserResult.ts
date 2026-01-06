export type DeleteUserSuccess = {
    success: true;
};

export type DeleteUserError = {
    success: false;
    errorMsg: string;
};

export type DeleteUserResult = DeleteUserSuccess | DeleteUserError;
