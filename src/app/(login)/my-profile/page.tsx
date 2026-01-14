import { redirect } from 'next/navigation';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';

import { getRoleLabel } from '@/utils/get-role-label';
import { ROUTES } from '@/constants/routes';
import { userRepository } from '@/lib/repositories/user.repository';
import { requireSession } from '@/domain/auth/require-session';

export default async function MyProfilePage() {
    const { id } = await requireSession();
    const userData = await userRepository.getUserForProfilePage({ id });
    //REVIEW: zmienic na błąd?
    if (!userData) redirect('/sign-in');

    return (
        <article>
            <h2>Mój profil</h2>
            <section>
                <form className="bg-theme-bg-secondary mx-auto max-w-lg space-y-4 rounded-lg p-6 shadow-md">
                    {/* Name */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Imię: </label>
                        <span className="text-theme-txt-secondary">{userData.name}</span>
                    </div>

                    {/* Role */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Rola: </label>
                        <span className="text-theme-txt-secondary">
                            {getRoleLabel(userData.role)}
                        </span>
                    </div>

                    {/* Login */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Login: </label>
                        <span className="text-theme-txt-secondary">{userData.login}</span>
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
                            {userData.plotsId.length > 0
                                ? userData.plotsId.map((p) => p.plot.plotNumber).join(', ')
                                : '—'}
                        </div>
                    </div>
                </form>
            </section>
        </article>
    );
}
