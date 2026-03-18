'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { CRUDModalType } from '@/shared/types/crud-modal';

import { CustomButton } from '@/components/custom-button';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import {
    CreateUserData,
    DeleteUserData,
    UpdateUserData,
} from '@/features/user/domain/user-api-contracts';
import { UserTableRow } from '@/features/user/domain/user-read-models';

import { CreateUserModal } from '@/features/user/ui/crud-modals/create-user-modal';
import { EditUserModal } from '@/features/user/ui/crud-modals/edit-user-modal';
import DeleteUserModal from '@/features/user/ui/crud-modals/delete-user-modal';
import UsersTable from '@/features/user/ui/users-table';

interface Props {
    userTableRows: UserTableRow[];
    plotOptions: PlotMinimalReference[];
}

export default function CMSUsersView({ userTableRows, plotOptions }: Props) {
    //NOTE: Copy user table rows into state for local update after server action mutation.
    const [userRows, setUserRows] = useState<UserTableRow[]>(userTableRows);
    const [activeModal, setActiveModal] = useState<CRUDModalType>(null);
    const [selectedUser, setSelectedUser] = useState<UserTableRow | null>(null);

    const openModal = (type: CRUDModalType, user?: UserTableRow) => {
        setSelectedUser(user ?? null);
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedUser(null);
    };

    // FIXME: widok nie powiniem dodakowo mapowac/zmieniac danych domenowych (data)
    const addUserInTable = (createdUser: CreateUserData) => {
        const newUser: UserTableRow = {
            id: createdUser.id,
            name: createdUser.name,
            role: createdUser.role,
            plots: createdUser.plots,
            createdAt: new Date(createdUser.createdAt),
            lastLogin: createdUser.lastLogin,
        };

        setUserRows((prev) => [newUser, ...prev]);
    };

    //REVIEW: Is this a good approach? (different interface with same fields)
    const updateUserInTable = (updatedUser: UpdateUserData) => {
        setUserRows((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    };

    const removeUserFromTable = (userId: number) => {
        setUserRows((prev) => prev.filter((u) => u.id !== userId));
    };

    return (
        <section>
            <h1 className="h2">Tabela kont działkowców</h1>

            <CustomButton
                type="button"
                title="Dodaj nowe konto"
                onClick={() => openModal('create')}
                context="iconSquare"
                variant="action"
                className="mx-auto mb-4"
            >
                <Plus />
            </CustomButton>

            <UsersTable data={userRows} onEdit={openModal} onDelete={openModal} />

            {activeModal === 'create' && (
                <CreateUserModal
                    plotOptions={plotOptions}
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onUserCreated={(createdUser: CreateUserData) => {
                        addUserInTable(createdUser);
                    }}
                />
            )}

            {activeModal === 'edit' && selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    plotOptions={plotOptions}
                    onCloseModal={() => closeModal()}
                    onUpdatedUser={(updatedUser: UpdateUserData) => {
                        closeModal();
                        updateUserInTable(updatedUser);
                    }}
                />
            )}

            {activeModal === 'delete' && selectedUser && (
                <DeleteUserModal
                    user={selectedUser}
                    onCloseModal={closeModal}
                    onUserDeleted={(deletedUser: DeleteUserData) => {
                        closeModal();
                        removeUserFromTable(deletedUser.id);
                    }}
                />
            )}
        </section>
    );
}
