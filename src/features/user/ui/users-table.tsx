'use client';

import { Pencil, Search, Trash2 } from 'lucide-react';

import { CRUDModalType } from '@/shared/types/crud-modal';

import { CustomButton } from '@/components/custom-button';

import { UserTableRow } from '@/features/user/domain/user-read-models';
import { getUserRoleLabel } from '@/features/user/domain/user-helpers';

interface Props {
    data: UserTableRow[];
    onEdit: (type: CRUDModalType, user: UserTableRow) => void;
    onDelete: (type: CRUDModalType, user: UserTableRow) => void;
}

export default function UsersTable({ data, onEdit, onDelete }: Props) {
    return (
        <div className="overflow-x-auto">
            <table
                atia-label="Tabela konta działkowców"
                className="w-full text-xs md:text-sm lg:text-base"
            >
                <thead>
                    <tr>
                        <th>lp.</th>
                        <th>Osoba</th>
                        <th>Rola</th>
                        <th>Ilość działek</th>
                        <th>Logowanie</th>
                        <th>Szczegóły</th>
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((userRow, i) => (
                        <tr key={userRow.id}>
                            <td>{i + 1}</td>
                            <td>{userRow.name}</td>
                            <td>{getUserRoleLabel(userRow.role)}</td>
                            <td>{userRow.plots}</td>
                            <td>
                                {userRow.lastLogin
                                    ? new Date(userRow.lastLogin).toLocaleDateString('pl-PL')
                                    : '—'}
                            </td>
                            <td>
                                <CustomButton
                                    type="button"
                                    title="Zobacz szczegóły konta"
                                    onClick={() => onEdit('edit', userRow)}
                                    context="table"
                                    variant="action"
                                >
                                    <Search aria-hidden="true" />
                                </CustomButton>
                            </td>
                            <td>
                                <CustomButton
                                    type="button"
                                    title="Edytuj dane konta"
                                    onClick={() => onEdit('edit', userRow)}
                                    context="table"
                                    variant="action"
                                >
                                    <Pencil aria-hidden="true" />
                                </CustomButton>
                            </td>
                            <td>
                                <CustomButton
                                    type="button"
                                    title="Usuń konto"
                                    onClick={() => onDelete('delete', userRow)}
                                    context="table"
                                    variant="danger"
                                >
                                    <Trash2 aria-hidden="true" />
                                </CustomButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
