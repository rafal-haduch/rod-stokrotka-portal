'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowBigLeft, Copy, UserRoundPlus } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

import { CreateUserSuccess as CreateUserSuccessType } from '@/types/user-actions-result';

import { getRoleLabel } from '@/utils/getRoleLabel';

interface Props {
    result: CreateUserSuccessType;
    onReset: () => void;
}

export default function CreateUserSuccess({ result, onReset }: Props) {
    const [copied, setCopied] = useState(false);

    function copyCredentials() {
        if (!result.success) return;

        navigator.clipboard.writeText(
            `Login: ${result.data.login}\nHasło: ${result.data.password}`
        );

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }
    return (
        <>
            <h3 className="text-center text-green-500">Konto zostało utworzone</h3>

            <p className="text-center">
                Osoba <strong>{result.data.name}</strong> z rolą{' '}
                <strong>{getRoleLabel(result.data.role)}</strong>
            </p>

            <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
                <label className="col-span-1 flex items-center justify-end text-base">Login:</label>
                <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                    {result.data.login}
                </label>

                <label className="col-span-1 flex items-center justify-end text-base">Hasło:</label>
                <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                    {result.data.password}
                </label>
            </fieldset>

            <div className="flex flex-col items-center justify-center">
                <p
                    className={`text-sm text-green-600 transition-opacity duration-200 ${
                        copied ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {copied ? 'Skopiowano do schowka.' : '.'}
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

            <p className="mb-4 text-center text-sm">
                Pamiętaj aby przekazać te dane do logowania osobie, dla której zostało założone
                konto. Możesz kliknąć powyższy przycisk by je wygodnie skopiować i wysłać.
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-10">
                <Link
                    href={ROUTES.DASHBOARD_USERS.path}
                    title="Wróć do tabeli Działkowców"
                    className="btn btn-sm btn-theme"
                >
                    <ArrowBigLeft /> Wróć do tabeli
                </Link>
                <button
                    type="button"
                    onClick={onReset}
                    title="Dodaj kolejne nowe konto"
                    className="btn btn-sm btn-theme"
                >
                    Dodaj kolejne <UserRoundPlus />
                </button>
            </div>
        </>
    );
}
