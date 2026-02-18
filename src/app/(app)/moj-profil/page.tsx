import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';

import { ROUTES } from '@/config/routes';

import { getRoleLabel } from '@/utils/get-role-label';

import { requireSession } from '@/domain/auth/require-session';
import { userRepository } from '@/domain/user/user.repository';
import { mapUserToUserProfile } from '@/domain/user/user.mapper';

export default async function MyProfilePage() {
    const session = await requireSession();
    const user = await userRepository.findByIdWithPlots(session.id);
    //REVIEW: change to 500?
    if (!user) notFound();

    const userProfile = mapUserToUserProfile(user);

    return (
        <section>
            <h1 className="h2">Mój profil</h1>

            <section className="panel-bl mx-auto max-w-lg space-y-4 rounded-lg p-6 text-base shadow-lg sm:text-lg">
                <h2 className="sr-only">Moje dane</h2>
                {/* Name */}
                <div className="flex items-center gap-1">
                    <label htmlFor="user-name" className="text-theme-txt">
                        Imię:
                    </label>
                    <p id="user-name" className="text-theme-txt-secondary">
                        {userProfile.name}
                    </p>
                </div>
                {/* Role */}
                <div className="flex space-x-1">
                    <label htmlFor="user-role" className="text-theme-txt">
                        Rola:
                    </label>
                    <p id="user-role" className="text-theme-txt-secondary">
                        {getRoleLabel(userProfile.role)}
                    </p>
                </div>
                {/* Login */}
                <div className="flex space-x-1">
                    <label htmlFor="user-login" className="text-theme-txt">
                        Login:
                    </label>
                    <p id="user-login" className="text-theme-txt-secondary">
                        {userProfile.login}
                    </p>
                </div>
                {/* Password */}
                <div className="flex space-x-1">
                    <label htmlFor="change-password" className="text-theme-txt">
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
