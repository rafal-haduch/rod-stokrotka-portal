'use client';

import { useState } from 'react';
import { Copy, TriangleAlert } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

import { CustomButton } from '@/components/custom-button';

import { getUserRoleLabel } from '@/features/user/domain/user-helpers';
import { CreateUserData } from '@/features/user/domain/user-api-contracts';

interface Props {
    result: CreateUserData;
}

export function CreateUserSuccess({ result }: Props) {
    const [copied, setCopied] = useState(false);

    function copyCredentials() {
        navigator.clipboard.writeText(`Login: ${result.login}\nHasło: ${result.password}`);

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }
    return (
        <div aria-labelledby="success-heading" className="flex flex-col gap-4">
            <p id="success-heading" className="text-center text-xl font-semibold text-green-500">
                Konto zostało utworzone
            </p>
            <p className="text-theme-foreground-content text-center">
                Osoba <strong>{result.name}</strong> z rolą{' '}
                <strong>{getUserRoleLabel(result.role)}</strong> została dodana do systemu.
            </p>

            <div className="mx-auto flex flex-col gap-2">
                <div className="flex w-full items-center gap-2">
                    <span>Login:</span>
                    <output className="input-form text-center">{result.login}</output>
                </div>
                <div className="flex w-full items-center gap-2">
                    <span>Hasło:</span>
                    <output className="input-form text-center">{result.password}</output>
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
                    aria-live="polite"
                    aria-atomic="true"
                    className={cn(
                        'text-theme-foreground-muted min-h-5 text-sm transition-opacity duration-200',
                        copied ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {copied ? 'Skopiowano do schowka.' : ' '}
                </p>
                <div
                    role="alert"
                    className="bg-theme-background-main mx-auto flex flex-col items-center border-2 border-red-500 p-1"
                >
                    <TriangleAlert aria-hidden="true" className="text-red-500" />
                    <p className="text-theme-foreground-content">
                        Pamiętaj, aby przekazać dane do logowania osobie, <br />
                        dla której zostało założone konto. <br /> Możesz kliknąć powyższy przycisk
                        "Kopiuj",
                        <br /> aby je wygodnie skopiować i wysłać.
                    </p>
                </div>
            </div>
        </div>
    );
}
