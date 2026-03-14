'use client';

import { useState } from 'react';
import { Copy, TriangleAlert, X } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

import { CustomButton } from '@/components/custom-button';

import { getRoleLabel } from '@/features/user/domain/user-helpers';
import { CreatedUserData } from '@/features/user/domain/user-api-contracts';

interface Props {
    result: CreatedUserData;
}

export default function CreateUserSuccess({ result }: Props) {
    const [copied, setCopied] = useState(false);

    function copyCredentials() {
        navigator.clipboard.writeText(`Login: ${result.login}\nHasło: ${result.password}`);

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }
    return (
        <div
            aria-labelledby="success-heading"
            className="flex flex-col gap-4 px-2 pb-2 sm:px-6 sm:pb-6"
        >
            <p id="success-heading" className="text-center text-xl font-semibold text-green-500">
                Konto zostało utworzone
            </p>
            <p className="text-theme-foreground-content text-center">
                Osoba <strong>{result.name}</strong> z rolą{' '}
                <strong>{getRoleLabel(result.role)}</strong> została dodana do systemu.
            </p>

            <div className="mx-auto flex flex-col gap-2">
                <div className="flex w-full gap-2">
                    <label className="flex w-fit items-center justify-end text-base">Login:</label>
                    <label className="input-form text-center">{result.login}</label>
                </div>
                <div className="flex w-full gap-2">
                    <label className="flex items-center justify-end text-base">Hasło:</label>
                    <label className="input-form text-center">{result.password}</label>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <CustomButton
                    type="button"
                    title="Skopiuj dane logowania"
                    onClick={copyCredentials}
                    size="sm"
                    variant="outline"
                >
                    Kopiuj
                    <Copy aria-hidden="true" />
                </CustomButton>
                <p
                    className={cn(
                        'text-theme-foreground-muted text-sm transition-opacity duration-200',
                        copied ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {copied ? 'Skopiowano do schowka.' : '.'}
                </p>
                <div className="bg-theme-background-main mx-auto flex flex-col items-center border-2 border-red-500 p-1">
                    <TriangleAlert aria-hidden="true" className="text-red-500" />
                    <p className="text-theme-foreground-content text-center">
                        Pamiętaj, aby przekazać dane do logowania osobie, dla której zostało
                        założone konto. Możesz kliknąć powyższy przycisk "Kopiuj", aby je wygodnie
                        skopiować i wysłać.
                    </p>
                </div>
            </div>
        </div>
    );
}
