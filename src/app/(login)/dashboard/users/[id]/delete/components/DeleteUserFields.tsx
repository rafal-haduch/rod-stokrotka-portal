import { Role } from '@prisma/client';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Ban, Trash2 } from 'lucide-react';
import { DeleteUserFormProps } from './DeleteUserForm';
import { getRoleLabel } from '@/utils/getRoleLabel';

interface Props {
    user: DeleteUserFormProps;
    loading: boolean;
    errorMsg: string | null;
}

export default function DeleteUserFields({ user, loading, errorMsg }: Props) {
    //TODO: hide admin role if role != admin
    const roles = Object.values(Role); //.filter((r) => r !== Role.ADMIN);

    return (
        <fieldset className="grid grid-cols-4 space-x-2 gap-y-3">
            <input type="hidden" name="id" value={user.id} />
            <h3 className="col-span-4 text-center">
                Czy napewno chcesz usunąć poniższe konto z systemu?
            </h3>

            {/* Name  */}
            <label className="col-span-1 flex items-center justify-end text-base">Osoba:</label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                {user.name}
            </label>

            {/* Role  */}
            <label className="col-span-1 flex items-center justify-end text-base">Rola:</label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                {getRoleLabel(user.role)}
            </label>

            {/* Plot  */}
            <label className="col-span-1 flex items-center justify-end text-base">Działka:</label>
            <label className="border-theme-200 bg-theme-bg-primary col-span-3 w-full rounded-md border px-3 py-2 shadow-sm sm:w-3/4">
                -
            </label>

            {/* Info */}
            <strong className="col-span-4 text-center text-red-500">
                Uwaga, tej operacji nie będzie można cofnąć!
            </strong>

            {/* Error  */}
            <div className="col-span-4 min-h-10 text-center sm:min-h-4">
                {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            </div>

            {/* Buttons */}
            <div className="col-span-4 flex justify-center gap-14">
                <Link
                    href={ROUTES.USERS_DASHBOARD.path}
                    title="Anuluj usuwanie konta"
                    className="btn btn-sm btn-theme"
                >
                    Anuluj <Ban />
                </Link>
                <button
                    title="Usuń konto z systemu"
                    disabled={loading}
                    className="btn btn-sm btn-danger border-0"
                >
                    Usuń <Trash2 />
                </button>
            </div>
        </fieldset>
    );
}
