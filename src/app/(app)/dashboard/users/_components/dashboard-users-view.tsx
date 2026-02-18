'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus } from 'lucide-react';

import { UserTableRowReadModel } from '@/domain/user/user.read-models';
import { PlotOption } from '@/domain/shared/get-sorted-plots-list-from-db';

import UsersTable from './users-table';
import CreateUserModal from './create-user-modal';
import EditUserModal from './edit-user-modal';
import DeleteUserModal from './delete-user-modal';

//REVIEW: export z katalogu types?
type ModalType = 'create' | 'edit' | 'delete' | null;

interface Props {
    userTableRows: UserTableRowReadModel[];
    availablePlots: PlotOption[];
}

export default function DashboardUsersView({ userTableRows, availablePlots }: Props) {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedUser, setSelectedUser] = useState<UserTableRowReadModel | null>(null);

    const router = useRouter();

    const openCreateUserModal = () => {
        setSelectedUser(null);
        setActiveModal('create');
    };
    const openEditUserModal = (user: UserTableRowReadModel) => {
        setSelectedUser(user);
        setActiveModal('edit');
    };
    const openDeleteUserModal = (user: UserTableRowReadModel) => {
        setSelectedUser(user);
        setActiveModal('delete');
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
                onClick={openCreateUserModal}
                title="Dodaj nowe konto"
                className="btn btn-icon btn-theme mx-auto mb-4"
            >
                <Plus />
            </button>

            <UsersTable
                data={userTableRows}
                onEdit={openEditUserModal}
                onDelete={openDeleteUserModal}
            />

            {activeModal === 'create' && (
                <CreateUserModal
                    plotOptions={availablePlots}
                    onCloseModal={() => {
                        closeModal();
                    }}
                    onUserCreated={() => {
                        closeModal();
                        router.refresh(); // NOTE: Used to automatically refresh the users table after closing the modal window containing the view informing about the successful creation of a new user.
                    }}
                />
            )}

            {activeModal === 'edit' && selectedUser && (
                <EditUserModal user={selectedUser} onClose={() => closeModal()} />
            )}

            {activeModal && selectedUser && (
                <DeleteUserModal user={selectedUser} onClose={() => closeModal()} />
            )}
        </section>
    );
}
