'use client';

import { useRouter } from 'next/navigation';
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
    const [activeModal, setActiveModal] = useState<CRUDModalType>(null);
    const [selectedUser, setSelectedUser] = useState<UserTableRow | null>(null);

    const router = useRouter();

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

            <UsersTable data={userTableRows} onEdit={openModal} onDelete={openModal} />

            {activeModal === 'create' && (
                <CreateUserModal
                    plotOptions={plotOptions}
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

            {activeModal === 'delete' && selectedUser && (
                <DeleteUserModal user={selectedUser} onClose={() => closeModal()} />
            )}
        </section>
    );
}
