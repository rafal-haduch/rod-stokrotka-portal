'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { CRUDModalType } from '@/types/crud-modal';

import { UserTableRow } from '@/domain/user/user.read-models';
import { PlotOption } from '@/domain/plot/plot.read-models';

import UsersTable from './users-table';
import CreateUserModal from './create-user-modal';
import EditUserModal from './edit-user-modal';
import DeleteUserModal from './delete-user-modal';

interface Props {
    userTableRows: UserTableRow[];
    plotOptions: PlotOption[];
}

export default function DashboardUsersView({ userTableRows, plotOptions }: Props) {
    //NOTE: Copy user table rows into state for local update after server actions mutation
    const [userRows, setUserRows] = useState<UserTableRow[]>(userTableRows);
    const [activeModal, setActiveModal] = useState<CRUDModalType>(null);
    const [selectedUser, setSelectedUser] = useState<UserTableRow | null>(null);

    const addUserInTable = (newUserRow: UserTableRow) => {
        const newUser: UserTableRow = {
            id: newUserRow.id,
            name: newUserRow.name,
            role: newUserRow.role,
            plots: newUserRow.plots,
            createdAt: new Date(newUserRow.createdAt),
            lastLogin: newUserRow.lastLogin ? new Date(newUserRow.lastLogin) : null,
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

            <button
                type="button"
                onClick={() => openModal('create')}
                title="Dodaj nowe konto"
                className="btn btn-icon btn-theme mx-auto mb-4"
            >
                <Plus />
            </button>

            <UsersTable data={userRows} onEdit={openModal} onDelete={openModal} />

            {activeModal === 'create' && (
                <CreateUserModal
                    plotOptions={plotOptions}
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onUserCreated={(newUserRow: UserTableRow) => {
                        closeModal();
                        addUserInTable(newUserRow);
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
