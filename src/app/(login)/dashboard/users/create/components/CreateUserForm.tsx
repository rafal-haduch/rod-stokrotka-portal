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
            className="bg-theme-bg-secondary mx-auto flex max-w-xl flex-col gap-2 p-4"
        >
            {result ? (
                /* Feedback result from action create user */
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
                        <p
                            className={`text-sm text-green-600 transition-opacity duration-200 ${
                                copied ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            Skopiowano do schowka
                        </p>
                        <button
                            type="button"
                            title="Skopiuj dane logowania"
                            onClick={copyCredentials}
                            className="btn btn-sm btn-theme"
                        >
                            Kopiuj
                            <Copy />
                        </button>
                    </div>

                    <p className="text-center text-base">
                        Pamiętaj aby przekazać te dane do logowania osobie, dla której zostało
                        założone konto. Możesz kliknąć powyższy przycisk by je wygodnie skopiować i
                        wysłać.
                    </p>

                    <div className="flex items-center justify-center gap-10">
                        <Link href={ROUTES.USERS_DASHBOARD.path} className="btn btn-sm btn-theme">
                            Wróć do tabeli
                        </Link>
                        <button
                            type="button"
                            onClick={() => setResult(null)}
                            className="btn btn-sm btn-theme"
                        >
                            Dodaj kolejnego
                        </button>
                    </div>
                </>
            ) : (
                /* Create User Form */
                <>
                    <div className="flex items-center justify-center gap-4">
                        <label>Imię:</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary rounded-md border px-3 py-2 shadow-sm focus:outline-none"
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

                    {/* Buttons */}
                    <div className="flex justify-center gap-14">
                        <Link
                            href={ROUTES.USERS_DASHBOARD.path}
                            title="Anuluj proces dodawania"
                            className="btn btn-sm btn-theme"
                        >
                            Anuluj
                        </Link>
                        <button
                            type="submit"
                            title="Dodaj Działkowca"
                            className="btn btn-sm btn-theme"
                        >
                            Dodaj
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
