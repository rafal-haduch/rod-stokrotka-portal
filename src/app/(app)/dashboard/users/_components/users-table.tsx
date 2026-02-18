import { UserTableRowReadModel } from '@/domain/user/user.read-models';
import { getRoleLabel } from '@/utils/get-role-label';
import { Pencil, Trash2 } from 'lucide-react';

interface Props {
    data: UserTableRowReadModel[];
    onEdit: (owner: UserTableRowReadModel) => void;
    onDelete: (owner: UserTableRowReadModel) => void;
}

export default function UsersTable({ data, onEdit, onDelete }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm lg:text-base">
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
                                {rowUser.plotNumbers.length > 0
                                    ? rowUser.plotNumbers.join(', ')
                                    : '—'}
                            </td>
                            <td>{getRoleLabel(rowUser.role)}</td>
                            <td>{rowUser.createdAt.toLocaleDateString('pl-PL')}</td>
                            <td>
                                {rowUser.lastLogin
                                    ? rowUser.lastLogin.toLocaleDateString('pl-PL')
                                    : '—'}
                            </td>
                            <td>
                                <button
                                    onClick={() => onEdit(rowUser)}
                                    title="Edytuj dane konta"
                                    className="btn btn-primary btn-in-table"
                                >
                                    <Pencil />
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete(rowUser)}
                                    title="Usuń konto z systemu"
                                    className="btn btn-danger btn-in-table"
                                >
                                    <Trash2 />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
