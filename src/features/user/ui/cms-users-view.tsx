'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { CRUDModalType } from '@/shared/types/crud-modal';
import { ComponentWithPlotOptionsProps } from '@/shared/models/plot-options-props';

import { CustomButton } from '@/components/custom-button';

import {
    CreateUserData,
    DeleteUserData,
    UpdateUserData,
} from '@/features/user/domain/user-api-contracts';
import { UserTableRow } from '@/features/user/domain/user-read-models';

import { CreateUserModal } from '@/features/user/ui/crud-modals/create-user-modal';
import { UpdateUserModal } from '@/features/user/ui/crud-modals/update-user-modal';
import DeleteUserModal from '@/features/user/ui/crud-modals/delete-user-modal';
import UsersTable from '@/features/user/ui/users-table';
import { ReadUserModal } from '@/features/user/ui/crud-modals/read-user-modal';

interface Props extends ComponentWithPlotOptionsProps {
    userTableRows: UserTableRow[];
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

    const addUserInTable = (createdUser: CreateUserData) => {
        const newUser: UserTableRow = {
            id: createdUser.id,
            name: createdUser.name,
            role: createdUser.role,
            plots:
                createdUser.ownedPlots.length +
                createdUser.coOwnedPlots.length +
                createdUser.usedPlots.length,
            ownedPlots: createdUser.ownedPlots,
            coOwnedPlots: createdUser.coOwnedPlots,
            usedPlots: createdUser.usedPlots,
            createdAt: createdUser.createdAt,
            lastLogin: createdUser.lastLogin,
        };

        setUserRows((prev) => [newUser, ...prev]);
    };

    const updateUserInTable = (updatedUser: UpdateUserData) => {
        const editedUser: UserTableRow = {
            id: updatedUser.id,
            name: updatedUser.name,
            role: updatedUser.role,
            plots:
                updatedUser.ownedPlots.length +
                updatedUser.coOwnedPlots.length +
                updatedUser.usedPlots.length,
            ownedPlots: updatedUser.ownedPlots,
            coOwnedPlots: updatedUser.coOwnedPlots,
            usedPlots: updatedUser.usedPlots,
            createdAt: updatedUser.createdAt,
            lastLogin: updatedUser.lastLogin,
        };

        setUserRows((prev) => prev.map((u) => (u.id === editedUser.id ? editedUser : u)));
    };

    const removeUserFromTable = (deletedUserId: number) => {
        setUserRows((prev) => prev.filter((u) => u.id !== deletedUserId));
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

            <UsersTable
                data={userRows}
                onDetails={openModal}
                onUpdate={openModal}
                onDelete={openModal}
            />

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

            {activeModal === 'read' && selectedUser && (
                <ReadUserModal user={selectedUser} onCloseModal={() => closeModal()} />
            )}

            {activeModal === 'update' && selectedUser && (
                <UpdateUserModal
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
