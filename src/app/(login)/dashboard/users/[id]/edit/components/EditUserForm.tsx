'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Role } from '@prisma/client';

import { updateUser } from '@/actions/user/update';

import { ROUTES } from '@/constants/routes';

import { getRoleLabel } from '@/utils/getRoleLabel';
import { Save } from 'lucide-react';

export interface EditUserFormProps {
    user: {
        id: number;
        name: string;
        role: Role;
        plots: { id: number }[];
    };
    roles: Role[];
}

export default function EditUserForm({ user, roles }: EditUserFormProps) {
    const [role, setRole] = useState<Role>(user.role);
    //TODO: hide admin role if role != admin

    return (
        <form
            action={updateUser}
            className="bg-theme-ui-bg-light mx-auto flex max-w-xl flex-col gap-4 rounded-xl p-4 shadow-lg"
        >
            <input type="hidden" name="id" value={user.id} />

            <div>
                <label>Osoba:</label>
                <input name="name" defaultValue={user.name} />
            </div>

            <div>
                <label>Rola:</label>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value as Role)}>
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {getRoleLabel(role)}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Działki:</label>
                <input
                    name="plots"
                    defaultValue={user.plots.length ? user.plots.map((p) => p.id).join(', ') : '—'}
                />
            </div>

            <div className="flex justify-center gap-10">
                <Link
                    href={ROUTES.USERS_DASHBOARD.path}
                    title="Anuluj proces modyfikacji konta"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj
                </Link>
                <button title="Zapisz nowe dane konta" className="btn btn-sm btn-theme">
                    Zapisz <Save />
                </button>
            </div>
        </form>
    );
}
