import { notFound } from 'next/navigation';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

import { requireSession } from '@/shared/auth/require-session';
import { getRoleLabel } from '@/features/user/domain/user-helpers';
import { getUserProfile } from '@/features/user/domain/queries/get-user-profile-query';

export default async function MyProfilePage() {
    const session = await requireSession();
    const userProfile = await getUserProfile(session.id);
    //REVIEW: change to 500?
    if (!userProfile) notFound();

    return (
        <section>
            <h1 className="h2">Mój profil</h1>
            {/* TODO: move into /features/user/ui */}
            <section className="panel surface-elevated-subtle mx-auto max-w-lg space-y-4 p-6 text-lg">
                <h2 className="sr-only">Moje dane</h2>
                {/* Name */}
                <div className="flex items-center gap-1">
                    <label htmlFor="user-name" className="text-theme-ui-foreground-primary">
                        Imię:
                    </label>
                    <p id="user-name" className="text-theme-txt-secondary">
                        {userProfile.name}
                    </p>
                </div>
                {/* Role */}
                <div className="flex space-x-1">
                    <label htmlFor="user-role" className="text-theme-ui-foreground-primary">
                        Rola:
                    </label>
                    <p id="user-role" className="text-theme-txt-secondary">
                        {getRoleLabel(userProfile.role)}
                    </p>
                </div>
                {/* Login */}
                <div className="flex space-x-1">
                    <label htmlFor="user-login" className="text-theme-ui-foreground-primary">
                        Login:
                    </label>
                    <p id="user-login" className="text-theme-txt-secondary">
                        {userProfile.login}
                    </p>
                </div>
                {/* Password */}
                <div className="flex space-x-1">
                    <label htmlFor="change-password" className="text-theme-ui-foreground-primary">
                        Hasło:
                    </label>
                    <Link
                        id="change-password"
                        href={ROUTES.CHANGE_PASSWORD.path}
                        className="flex underline"
                        title="Kliknij aby zmienić swoje hasło"
                    >
                        Zmień hasło <KeyRound />
                    </Link>
                </div>
            </section>
        </section>
    );
}
