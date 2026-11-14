import Link from 'next/link';
import { Ban, Save } from 'lucide-react';

import { ROUTES } from '@/config/routes';

interface Props {
    loading: boolean;
    errorMsg: string | null;
}

export default function UpdateUserFields({ loading, errorMsg }: Props) {
    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <h3 className="col-span-4 text-center">Zmien haslo:</h3>

            {/* Current Password  */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Aktualne haslo:
            </label>
            <input
                type="password"
                name="currentPassword"
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* New Password  */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Nowe haslo:
            </label>
            <input
                type="password"
                name="newPassword"
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Repeat New Password */}
            <label className="col-span-1 flex items-center justify-end text-base">
                Powtórz nowe haslo:
            </label>
            <input
                type="password"
                name="newPasswordRepeat"
                required
                className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary col-span-3 flex w-full items-center justify-center rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:w-3/4"
            />

            {/* Error  */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.MY_ACCOUNT.path}
                    title="Anuluj zmianę hasla"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>
                <button title="Zmień haslo" disabled={loading} className="btn btn-sm btn-theme">
                    Zmien <Save />
                </button>
            </div>
        </fieldset>
    );
}
