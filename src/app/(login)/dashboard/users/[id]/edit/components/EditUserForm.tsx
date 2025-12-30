'use client';

import { useState } from 'react';
import { Role } from '@prisma/client';
import { updateUser } from '@/actions/user/update';

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

    return (
        <form action={updateUser}>
            <input type="hidden" name="id" value={user.id} />

            <label>Osoba:</label>
            <input name="name" defaultValue={user.name} />

            <label>Rola:</label>
            <select name="role" value={role} onChange={(e) => setRole(e.target.value as Role)}>
                {roles.map((r) => (
                    <option key={r} value={r}>
                        {r}
                    </option>
                ))}
            </select>

            <label>Działki:</label>
            <input
                name="plots"
                defaultValue={user.plots.length ? user.plots.map((p) => p.id).join(', ') : '—'}
            />

            <button className="button-text">Zmień</button>
        </form>
    );
}
