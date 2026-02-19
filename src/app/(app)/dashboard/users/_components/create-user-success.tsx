'use client';

import { useState } from 'react';
import { Copy, TriangleAlert, X } from 'lucide-react';

import { CreateUserSuccess as CreateUserSuccessType } from '@/contracts/user-actions';

import { getRoleLabel } from '@/domain/user/user.helpers';

interface Props {
    result: CreateUserSuccessType;
    onUserCreated: () => void;
}

export default function CreateUserSuccess({ result, onUserCreated }: Props) {
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
            <button
                type="button"
                onClick={onUserCreated}
                title="Zamknij okno dodawania nowego działkowca"
                className="ml-auto flex p-2 hover:cursor-pointer"
            >
                <X className="h-8 w-8" />
            </button>
            <div
                aria-labelledby="success-heading"
                className="flex flex-col gap-4 px-2 pb-2 sm:px-6 sm:pb-6"
            >
                <p
                    id="success-heading"
                    className="text-center text-xl font-semibold text-green-500"
                >
                    Konto zostało utworzone
                </p>
                <p className="text-center text-base">
                    Osoba <strong>{result.data.name}</strong> z rolą{' '}
                    <strong>{getRoleLabel(result.data.role)}</strong> została dodana do systemu.
                </p>

                <div className="mx-auto flex flex-col gap-2">
                    <div className="flex w-full gap-2">
                        <label className="flex w-fit items-center justify-end text-base">
                            Login:
                        </label>
                        <label className="border-theme-200 bg-theme-bg-primary flex w-full rounded-md border px-3 py-2 shadow-sm">
                            {result.data.login}
                        </label>
                    </div>
                    <div className="flex w-full gap-2">
                        <label className="flex items-center justify-end text-base">Hasło:</label>
                        <label className="border-theme-200 bg-theme-bg-primary w-full rounded-md border px-3 py-2 shadow-sm">
                            {result.data.password}
                        </label>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <button
                        type="button"
                        title="Skopiuj dane logowania"
                        onClick={copyCredentials}
                        className="btn btn-sm btn-theme"
                    >
                        Kopiuj
                        <Copy />
                    </button>
                    <p
                        className={`text-sm transition-opacity duration-200 ${
                            copied ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {copied ? 'Skopiowano do schowka.' : '.'}
                    </p>
                    <div className="mx-auto flex flex-col items-center border border-red-500 p-1">
                        <TriangleAlert className="text-red-500" />
                        <p className="text-center text-base">
                            Pamiętaj aby przekazać dane do logowania osobie, dla której zostało
                            założone konto. Możesz kliknąć powyższy przycisk "Kopiuj" by je wygodnie
                            skopiować i wysłać.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
