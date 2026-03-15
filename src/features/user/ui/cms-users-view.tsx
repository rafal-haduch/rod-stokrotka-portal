'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { CRUDModalType } from '@/shared/types/crud-modal';

import { CustomButton } from '@/components/custom-button';

import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import CreateUserModal from '@/features/user/ui/modals/create-user-modal';
import EditUserModal from '@/features/user/ui/modals/edit-user-modal';
import DeleteUserModal from '@/features/user/ui/modals/delete-user-modal';
import UsersTable from '@/features/user/ui/users-table';
import { CreatedUserData } from '@/features/user/domain/user-api-contracts';

interface Props {
    userTableRows: UserTableRow[];
    plotOptions: PlotMinimalReference[];
}

export default function CMSUsersView({ userTableRows, plotOptions }: Props) {
    //NOTE: Copy user table rows into state for local update after server action mutation.
    const [userRows, setUserRows] = useState<UserTableRow[]>(userTableRows);
    const [activeModal, setActiveModal] = useState<CRUDModalType>(null);
    const [selectedUser, setSelectedUser] = useState<UserTableRow | null>(null);

    // FIXME: widok nie powiniem dodakowo mapowac/zmieniac danych domenowych (data)
    const addUserInTable = (newUserData: CreatedUserData) => {
        const newUser: UserTableRow = {
            id: newUserData.id,
            name: newUserData.name,
            role: newUserData.role,
            plots: newUserData.plots,
            createdAt: new Date(newUserData.createdAt),
            lastLogin: newUserData.lastLogin,
        };

        setUserRows((prev) => [newUser, ...prev]);
    };

    const updateUserInTable = (updatedUser: UserTableRow) => {
        setUserRows((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    };

    const removeUserFromTable = (userId: number) => {
        setUserRows((prev) => prev.filter((u) => u.id !== userId));
    };

    const openModal = (type: CRUDModalType, user?: UserTableRow) => {
        setSelectedUser(user ?? null);
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedUser(null);
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
                    onUserCreated={(newUserData: CreatedUserData) => {
                        addUserInTable(newUserData);
                    }}
                />
            )}

            {activeModal === 'edit' && selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    onCloseModal={() => closeModal()}
                    onUpdatedUser={(updatedUserRow: UserTableRow) => {
                        closeModal();
                        updateUserInTable(updatedUserRow);
                    }}
                    plotOptions={plotOptions}
                />
            )}

            {activeModal === 'delete' && selectedUser && (
                <DeleteUserModal
                    user={selectedUser}
                    onCloseModal={closeModal}
                    onUserDeleted={(id: number) => {
                        closeModal();
                        removeUserFromTable(id);
                    }}
                />
            )}
        </section>
    );
}
