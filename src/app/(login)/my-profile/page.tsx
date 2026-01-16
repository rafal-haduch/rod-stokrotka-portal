import { redirect } from 'next/navigation';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

import { requireSession } from '@/domain/auth/require-session';

import { getRoleLabel } from '@/utils/get-role-label';
import { userRepository } from '@/domain/user/user.repository';
import { mapUserToUserProfile } from '@/domain/user/user.mapper';

export default async function MyProfilePage() {
    const session = await requireSession();

    const user = await userRepository.findByIdWithPlots(session.id);
    //REVIEW: zmienic na błąd?
    if (!user) redirect('/sign-in');

    const userProfile = mapUserToUserProfile(user);

    return (
        <article>
            <h2>Mój profil</h2>
            <section>
                <form className="bg-theme-bg-secondary mx-auto max-w-lg space-y-4 rounded-lg p-6 shadow-md">
                    {/* Name */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Imię: </label>
                        <span className="text-theme-txt-secondary">{userProfile.name}</span>
                    </div>

                    {/* Role */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Rola: </label>
                        <span className="text-theme-txt-secondary">
                            {getRoleLabel(userProfile.role)}
                        </span>
                    </div>

                    {/* Login */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Login: </label>
                        <span className="text-theme-txt-secondary">{userProfile.login}</span>
                    </div>

                    {/* Password */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Hasło: </label>
                        <Link
                            href={ROUTES.CHANGE_PASSWORD.path}
                            className="flex underline"
                            title="Kliknij aby zmienić swoje hasło"
                        >
                            Zmień hasło <KeyRound />
                        </Link>
                    </div>

                    {/* Plots */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Działki: </label>
                        <div className="text-theme-txt-secondary">
                            {userProfile.plots.length > 0
                                ? userProfile.plots.map((p) => p.plotNumber).join(', ')
                                : '—'}
                        </div>
                    </div>
                </form>
            </section>
        </article>
    );
}
