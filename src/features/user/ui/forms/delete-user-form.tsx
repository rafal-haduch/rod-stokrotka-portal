'use client';

import { CustomButton } from '@/components/custom-button';

import { UserTableRow } from '@/features/user/domain/user.read-models';

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCloseModal: () => void;
    userData: UserTableRow;
    loading: boolean;
    errorMsg: string | null;
}

export default function DeleteUserForm({
    onSubmit,
    onCloseModal,
    userData,
    loading,
    errorMsg,
}: Props) {
    return (
        <form onSubmit={onSubmit} aria-labelledby="delete-user-form-heading">
            <input type="hidden" name="userId" value={userData.id}></input>
            <div className="flex flex-row items-center justify-evenly gap-4 sm:gap-0">
                <CustomButton type="submit" disabled={loading} size="md" variant="danger">
                    Usuń użytkownika
                </CustomButton>
                <CustomButton type="button" onClick={onCloseModal} size="md" variant="outline">
                    Anuluj
                </CustomButton>
            </div>
        </form>
    );
}
