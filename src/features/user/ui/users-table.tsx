'use client';

import { Pencil, Trash2 } from 'lucide-react';

import { CRUDModalType } from '@/types/crud-modal';

import { CustomButton } from '@/components/custom-button';

import { UserTableRow } from '@/features/user/domain/user.read-models';
import { getRoleLabel } from '@/features/user/domain/user.helpers';

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
                        <th>ID</th>
                        <th>Osoba</th>
                        <th>Działka</th>
                        <th>Rola</th>
                        <th>Dodano</th>
                        <th>Logowanie</th>
                        <th>Edytuj</th>
                        <th>Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowUser) => (
                        <tr key={rowUser.id}>
                            <td>{rowUser.id}</td>
                            <td>{rowUser.name}</td>
                            <td>
                                {rowUser.plots.length > 0
                                    ? rowUser.plots
                                          .map((plot) => {
                                              return plot.plotNumber;
                                          })
                                          .join(', ')
                                    : '—'}
                            </td>
                            <td>{getRoleLabel(rowUser.role)}</td>
                            <td>{new Date(rowUser.createdAt).toLocaleDateString('pl-PL')}</td>
                            <td>
                                {rowUser.lastLogin
                                    ? new Date(rowUser.lastLogin).toLocaleDateString('pl-PL')
                                    : '—'}
                            </td>
                            <td>
                                <CustomButton
                                    type="button"
                                    title="Edytuj dane konta"
                                    onClick={() => onEdit('edit', rowUser)}
                                    context="table"
                                    variant="action"
                                >
                                    <Pencil aria-hidden="true" />
                                </CustomButton>
                            </td>
                            <td>
                                <CustomButton
                                    type="button"
                                    title="Usuń konto z systemu"
                                    onClick={() => onDelete('delete', rowUser)}
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
