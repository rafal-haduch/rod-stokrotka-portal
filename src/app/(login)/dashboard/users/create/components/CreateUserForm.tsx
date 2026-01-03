'use client';

import { createUser } from '@/actions/user/create';
import { ROUTES } from '@/constants/routes';
import { getRoleLabel } from '@/utils/getRoleLabel';
import { Role } from '@prisma/client';
import { Copy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CreateUserForm() {
    const [role, setRole] = useState<Role>(Role.ALLOTMENT_GARDENER);
    const roles = Object.values(Role).filter((r) => r !== Role.ADMIN);

    const [result, setResult] = useState<null | {
        name: string;
        role: string;
        login: string;
        password: string;
    }>(null);

    const [copied, setCopied] = useState(false);

    function copyCredentials() {
        if (!result) return;

        navigator.clipboard.writeText(`Login: ${result.login}\nHasło: ${result.password}`);

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    async function action(formData: FormData) {
        const res = await createUser(formData);
        setResult(res);
    }

    return (
        <form
            action={action}
            className="bg-theme-bg-secondary mx-auto flex max-w-xl flex-col gap-4 p-4"
        >
            {result ? (
                <>
                    <div className="flex items-center justify-center gap-4">
                        <p>
                            Działkowiec <strong>{result.name}</strong> został dodany z rolą{' '}
                            <strong>{getRoleLabel(result.role as Role)}</strong>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <label>Login:</label>
                        <label className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none">
                            {result.login}
                        </label>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <label>Hasło:</label>
                        <label className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none">
                            {result.password}
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="button"
                            title="Skopiuj dane logowania"
                            onClick={copyCredentials}
                            className="cms-button-icon"
                        >
                            <Copy />
                        </button>
                        <p
                            className={`text-sm text-green-600 transition-opacity duration-200 ${
                                copied ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            Skopiowano do schowka
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <p>
                            Pamiętaj aby przekazać te dane do logowania osobie, dla której zostało
                            założone konto. Kliknij powyższy przycisk by je skopiować i wysłać.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Link href={ROUTES.USERS_DASHBOARD.path} className="cms-button-text">
                            Wróć do tabeli
                        </Link>
                        <button
                            type="button"
                            onClick={() => setResult(null)}
                            className="cms-button-text"
                        >
                            Dodaj kolejnego
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center justify-center gap-4">
                        <label>Imię:</label>
                        <input
                            type="text"
                            name="name"
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <label>Rola:</label>
                        <select
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value as Role)}
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                        >
                            {roles.map((role) => (
                                <option key={role} value={role}>
                                    {getRoleLabel(role)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <label>Działka:</label>
                        <input
                            type="text"
                            name="plot"
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                        />
                    </div>

                    <button type="submit" className="button-text mx-auto">
                        Dodaj
                    </button>
                </>
            )}
        </form>
    );
}
