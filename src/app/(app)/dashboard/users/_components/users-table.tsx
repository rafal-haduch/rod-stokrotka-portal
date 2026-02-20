import { Pencil, Trash2 } from 'lucide-react';

import { CRUDModalType } from '@/types/crud-modal';

import { getRoleLabel } from '@/domain/user/user.helpers';

import { UserTableRow } from '@/domain/user/user.read-models';

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
                                <button
                                    onClick={() => onEdit('edit', rowUser)}
                                    title="Edytuj dane konta"
                                    className="btn btn-primary btn-in-table"
                                >
                                    <Pencil aria-hidden="true" />
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete('delete', rowUser)}
                                    title="Usuń konto z systemu"
                                    className="btn btn-danger btn-in-table"
                                >
                                    <Trash2 aria-hidden="true" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
